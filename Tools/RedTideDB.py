import configparser
from pymongo import MongoClient
import certifi
from datetime import date


class RedTideDB:
    """
    hi alex and ferris
    """
    # https://www.mongodb.com/docs/manual/reference/connection-string/
    def __init__(self):
        self.db = None
        
        ca = certifi.where()

        config = configparser.ConfigParser()
        config.read('config.ini')
        mdb = config['mongoDB']

        # establish the "connection string" that we use to connect to the db with.
        cs = f"mongodb+srv://{mdb['username']}:{mdb['pw']}@{mdb['server']}/"
        self.client = MongoClient(cs, tlsCAFile=ca)

        print("Opened database connection.")

    def addTweet(self, single_tweet: dict):
        """
        Connects to the specified database, "redtideDB" in this case, and then adds a singular document to the
        collection called "tweets."
        :param single_tweet: Dict
        :return: Nothing yet, but insert_one does return something!
        """
        db = self.client.redtideDB
        db.tweets.insert_one(single_tweet)

    def addTweets(self, multiple_tweets: list):
        """
        Connects to the specified database, "redtideDB" in this case, and then adds a multiple documents to the
        collection called "tweets."
        :param multiple_tweets:
        :return:
        """
        db = self.client.redtideDB
        db.tweets.insert_many(multiple_tweets)


    def getTweets(self, limit: int):
        return

    def close(self):
        self.client.close()
        print("Database connection closed.")

    def addHistoricalData(self, data: dict):
        db = self.client.redtideDB
        db.tweetHistory.insert_one(data)

    def addYoutubeVideo(self, videoId, category):
        """ 
        Store a youtube video, based on ID and category, into the database.
        Also stores the day this method was called, and does not change anything if the
        video is already in the database.

        PARAMETERS
        videoId - the youtube video's ID
        category - the category of this video (for example: symptoms, awareness, prevention, etc.)
        """
        youtube = self.client.redtideDB.youtube
        videoCategory = youtube.find({'category': category})

        # We do not want to add duplicates of the video
        duplicateVideo = False

        # Check to see if videoId is already in the database
        for video in videoCategory:
            if (video['videoId'] == videoId):
                duplicateVideo = True

        # As long as the video isn't already in the database, add it to the database
        if (not duplicateVideo):
            print("Adding video to databse")
            youtube.insert_one({
                '_id': str(date.today()) + videoId,
                'category': category,
                'videoId': videoId,
                'databaseInsertDate': str(date.today())
            })

            



def main():
    client = RedTideDB()
    client.addYoutubeVideo("R7t7qrH_dsc", 'trending')
    client.close()

if __name__ == "__main__":
    main()
        
