#!/usr/bin/env python3

# Copyright (c) 2020, Arm Limited and Contributors. All rights reserved.
#
# SPDX-License-Identifier: BSD-3-Clause


import argparse
import base64
import json
import sys
import time
import urllib.request
from urllib.parse import urljoin
import ssl
import certifi
import smart_plug_pb2
from datetime import datetime



def main():
    """Perform the main execution."""

    # Parse command line
    parser = argparse.ArgumentParser(description="Extract From PDM")
    parser.add_argument("-a", "--apikey", type=str, help="User api key")
    parser.add_argument("-e", "--endpoint", type=str, help="Endpoint ID", default="*")

    options = parser.parse_args()

    if (options.apikey is None):
        parser.print_help()
        sys.exit(1)

    base64string =  bytes('%s' % (options.apikey), 'ascii')


    # Delete all existing subscriptions
    delete_request = urllib.request.Request("https://api.us-east-1.mbedcloud.com/v2/subscriptions", method='DELETE')
    delete_request.add_header("Authorization", "Bearer %s" % base64string.decode('utf-8'))

    try:
        result = urllib.request.urlopen(delete_request, context=ssl.create_default_context(cafile=certifi.where()))
    except urllib.error.HTTPError:
        print("HTTPError trying to DELETE subscriptions")


    # Create new  subscriptions
    subscription_data = bytes('[{ "endpoint-name": "%s", "resource-path": ["*"] }]' % (options.endpoint), 'ascii')
    subscription_request = urllib.request.Request("https://api.us-east-1.mbedcloud.com/v2/subscriptions", method='PUT', data=subscription_data)
    subscription_request.add_header("Authorization", "Bearer %s" % base64string.decode('utf-8'))

    try:
        result = urllib.request.urlopen(subscription_request, context=ssl.create_default_context(cafile=certifi.where()))
    except urllib.error.HTTPError:
        print("HTTPError trying to CREATE subscriptions")



    # Go get some data

    notify_request = urllib.request.Request("https://api.us-east-1.mbedcloud.com/v2/notification/pull")
    notify_request.add_header("Authorization", "Bearer %s" % base64string.decode('utf-8'))

    while(True):

        try:
            result = urllib.request.urlopen(notify_request, context=ssl.create_default_context(cafile=certifi.where()))
        except urllib.error.HTTPError:
            print("HTTPError trying the GET notifications")
        else:

            print(result.status)
            if result.status == 200:
                resulttext = result.read()

                # Decode UTF-8 bytes to Unicode, and convert single quotes
                # to double quotes to make it valid JSON
                my_json = resulttext.decode('utf8').replace("'", '"')
                # Load the JSON to a Python list & dump it back out as formatted JSON
                data = json.loads(my_json)
                s = json.dumps(data, indent=4, sort_keys=True)

                try:
                    for notification in data['notifications']:

                        print(notification)

                        if( notification['path'] == "/33455/0/1/1" or notification['path'] == "33455/0/1"):
                            print(notification['ep'])
                            smartplug = smart_plug_pb2.SmartPlug()
                            decoded = smartplug.ParseFromString(base64.b64decode(notification['payload']))
                            if decoded:
                                print("version " + str(smartplug.version))
                                print("sequence " + str(smartplug.sequence))
                                # Timestamp is seconds
                                print(
                                    "timestamp "
                                    + str(datetime.fromtimestamp(smartplug.timestamp))
                                    + " (" + str(smartplug.timestamp)
                                    + ")"
                                )
                                for m in smartplug.fields:
                                    print(m)
                            else:
                                print("No data")

                except KeyError:
                    print("KeyError:") 
                    print(my_json)
            else:
                print("Status: %d" % result.status)
                print("Reason: %s" % result.reason)


        print("")


        time.sleep(1)

if __name__ == "__main__":
    sys.exit(main())
