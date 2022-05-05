from Tools.TwitterScraper import TwitterScraper
from Tools.SensorData import SensorData
from Tools.RedTideDB import RedTideDB


def getTweets(database: RedTideDB, query):
    tweets = TwitterScraper(database.getLastTweet())
    print("Scraping Tweets")
    data = tweets.get_tweets(query)
    print("Adding Tweets")
    database.addTweets(data)
    return


def addSensorData(database: RedTideDB):
    sensors = SensorData(database.getLastSensorData())
    print("Stealing Sensor Data")
    data = sensors.getData()
    print("Adding Sensor Data")
    database.addSensorData(data)
    return


if __name__ == '__main__':
    db = RedTideDB()

    query = {
        'query': 'red tide -is:retweet -is:quote -roll -is:reply',
        'tweet.fields': 'created_at,public_metrics',
        'max_results': 10,
        'expansions': 'author_id'
    }

    getTweets(db, query)
    addSensorData(db)
    db.close()
