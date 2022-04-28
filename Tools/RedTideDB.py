import configparser
from pymongo import MongoClient
import certifi


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

    def addHistoricalData(self, data: dict):
        db = self.client.redtideDB
        db.tweetHistory.insert_one(data)

    def close(self):
        self.client.close()
        print("Database connection closed.")

    def addHistoricalData(self, data: dict):
        db = self.client.redtideDB
        db.tweetHistory.insert_one(data)
