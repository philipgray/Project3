import pprint

from Tools.TwitterScraper import TwitterScraper


def getTweets():
    ts = TwitterScraper()

    query_params = {
        'query': 'red tide -is:retweet -is:quote -roll -is:reply',
        'tweet.fields': 'created_at,public_metrics',
        'max_results': 10,
        'expansions': 'author_id'
    }

    results = ts.get_tweets(query_params)
    pprint.pprint(results)



# def main():

getTweets()
