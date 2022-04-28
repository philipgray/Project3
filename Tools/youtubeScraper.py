# -*- coding: utf-8 -*-

# Sample Python code for youtube.search.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/code-samples#python

import os

import googleapiclient.discovery

import configparser

class YoutubeScraper:
    ''' Class to hold general information and methods to do API calls with youtube '''

    # Channel IDs
    MOTE_ID = 'UC0Tvo7Chnyvgliwrmiqosbg'
    SARASOTA_MEMORIAL_ID = 'UCGBD7uXRwp_lb2Mpu2XupBQ'

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
            type = 'video',
            videoEmbeddable = 'true'
        )

        # Carry out the request and return it
        return request.execute()

    def searchRelevantMoteVideo(self, query: str = 'red tide'):
        ''' Searches the Mote Marine youtube channel for a video and returns the video in youtube's json format 
        RETURN - json dictionary containing all information about the video, including its ID
        NOTE - to get the video id, take the output of this function, and index ['id']['videoId'] '''
        
        response = self.searchForVideo(1, query, YoutubeScraper.MOTE_ID)
        
        return response['items'][0]

    def searchRelevantMedicalVideo(self, query: str = 'red tide symptoms'):
        ''' Searches the SMHCS youtube channel for a video and returns the video in youtube's json format 
        RETURN - json dictionary containing all information about the video, including its ID
        NOTE - to get the video id, take the output of this function, and index ['id']['videoId'] '''
        
        response = self.searchForVideo(1, query, YoutubeScraper.SARASOTA_MEMORIAL_ID)
        
        return response['items'][0]

def main():
    
    scraper = YoutubeScraper()
    print(scraper.searchRelevantMoteVideo()['id']['videoId'])
    print(scraper.searchRelevantMedicalVideo()['id']['videoId'])

if __name__ == "__main__":
    main()