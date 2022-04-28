# -*- coding: utf-8 -*-

# Sample Python code for youtube.search.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/code-samples#python

import os

import googleapiclient.discovery

import configparser

class YoutubeScraper:
    ''' Class to hold general information and methods to do API calls with youtube '''

    moteChannelId = 'UC0Tvo7Chnyvgliwrmiqosbg'

    def __init__(self):
        # Get developer key from config file
        config = configparser.ConfigParser()
        config.read('config.ini')
        self.DEVELOPER_KEY = config['youtube']['api_key']
        
        # Create a reference to the google API for youtube
        self.youtube = googleapiclient.discovery.build('youtube', 'v3', developerKey = self.DEVELOPER_KEY)


    def searchForVideo(self,  videoQuantity: int, query: str, channelID = None):

        # Create the request
        request = self.youtube.search().list(
            part = 'snippet',
            channelId = channelID,
            maxResults = videoQuantity,
            q = query,
            type = 'video'
            videoEmbeddable = 'true'
        )



def main():
    

    config = configparser.ConfigParser()
    config.read('config.ini')
    DEVELOPER_KEY = config['youtube']['api_key']

    api_service_name = "youtube"
    api_version = "v3"

    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey = DEVELOPER_KEY)

    request = youtube.search().list(
        part="snippet",
        channelId="UC0Tvo7Chnyvgliwrmiqosbg",
        maxResults=2,
        q="red tide"
    )
    response = request.execute()

    print(response)

if __name__ == "__main__":
    main()