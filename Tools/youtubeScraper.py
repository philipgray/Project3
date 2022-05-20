# -*- coding: utf-8 -*-

# Sample Python code for youtube.search.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/code-samples#python

import os

import googleapiclient.discovery
import configparser


class YoutubeScraper:
    """ Class to hold general information and methods to do API calls with YouTube """

    # Channel IDs
    MOTE_ID = 'UC0Tvo7Chnyvgliwrmiqosbg'
    SARASOTA_MEMORIAL_ID = 'UCGBD7uXRwp_lb2Mpu2XupBQ'

    def __init__(self):
        # Get developer key from config file
        config = configparser.ConfigParser()
        config.read('../config.ini')
        self.DEVELOPER_KEY = config['youtube']['api_key']

        # Create a reference to the google API for youtube
        self.youtube = googleapiclient.discovery.build('youtube', 'v3', developerKey=self.DEVELOPER_KEY)

    def searchForVideo(self, videoQuantity: int, query: str, channelID=None):
        """ Uses YouTube API to search for videos.

        PARAMETERS
        videoQuantity: how many search results you want to return
        query: the search term to use
        (optional) channelID: the channel to search from

        RETURN - The YouTube API response json. Index into ['items'] to get the videos from this search. """

        # Create the request
        request = self.youtube.search().list(
            part='snippet',
            channelId=channelID,
            maxResults=videoQuantity,
            q=query,
            type='video',
            videoEmbeddable='true'
        )

        # Carry out the request and return it
        return request.execute()

    def searchRelevantMoteVideo(self, query: str = 'red tide'):
        """ Searches the Mote Marine YouTube channel for a video and returns the video in YouTube's json format
        RETURN - json dictionary containing all information about the video, including its ID
        NOTE - to get the video id, take the output of this function, and index ['id']['videoId'] """

        response = self.searchForVideo(1, query, YoutubeScraper.MOTE_ID)

        return response['items'][0]

    def searchRelevantMedicalVideo(self, query: str = 'red tide symptoms'):
        """ Searches the SMHCS YouTube channel for a video and returns the video in YouTube's json format
        RETURN - json dictionary containing all information about the video, including its ID
        NOTE - to get the video id, take the output of this function, and index ['id']['videoId'] """

        response = self.searchForVideo(1, query, YoutubeScraper.SARASOTA_MEMORIAL_ID)

        return response['items'][0]

    def searchTrendingVideo(self, query: str = 'red tide'):
        ''' Searches all of YouTube for the most relevant video 
        RETURN - json dictionary containing all information about the video, including its ID.'''

        response = self.searchForVideo(1, query)

        return response['items'][0]


def main():
    scraper = YoutubeScraper()
    print(scraper.searchTrendingVideo())


if __name__ == "__main__":
    main()
