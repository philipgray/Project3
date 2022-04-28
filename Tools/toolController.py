import pprint

from Tools.TwitterScraper import TwitterScraper
from Tools.RedTideDB import RedTideDB


def getTweets(database, twitterScraper, query_params):
    results = twitterScraper.get_tweets(query_params)
    database.addTweets(results)
    print("Tweets Added to the Database")


if __name__ == '__main__':
    db = RedTideDB()
    ts = TwitterScraper()
    q1 = {
        'query': 'red tide -is:retweet -is:quote -roll -is:reply',
        'tweet.fields': 'created_at,public_metrics',
        'max_results': 10,
        'expansions': 'author_id'
    }
    getTweets(db, ts, q1)
    print("------")

    q2 = {
        'query': 'redtide -is:retweet -is:quote -roll -is:reply',
        'tweet.fields': 'created_at,public_metrics',
        'max_results': 10,
        'expansions': 'author_id'
    }

    getTweets(db, ts, q1)
    db.close()
