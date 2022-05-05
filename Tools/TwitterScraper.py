import configparser
from dateutil import parser
import requests


class TwitterScraper:
    def __init__(self, last_id=0):
        config = configparser.ConfigParser()
        config.read('config.ini')
        self.bearer_token = config['twitter']['bearer']
        self.search_url = "https://api.twitter.com/2/tweets/search/recent"
        self.last_id = last_id

    def bearer_oauth(self, r):
        r.headers["Authorization"] = f"Bearer {self.bearer_token}"
        r.headers["User-Agent"] = "RedTide Test"

        return r

    def connect_to_endpoint(self, url, params):
        response = requests.get(url, auth=self.bearer_oauth, params=params)
        print(response.status_code)

        if response.status_code != 200:
            raise Exception(response.status_code, response.text)
        return response.json()

    def get_tweets(self, query_params):
        response = self.connect_to_endpoint(self.search_url, query_params)
        results = []

        for data in response['data']:
            if data['id'] > self.last_id:
                date = parser.parse(data['created_at'])
                tweet = {
                    '_id': data['id'],
                    'text': data['text'],
                    'created_at': date,
                    'link': f"https://www.twitter.com/twitter/status/{data['id']}",
                    'likes': data['public_metrics']['like_count'],
                    'replies': data['public_metrics']['reply_count'],
                    'retweets': data['public_metrics']['retweet_count'] + data['public_metrics']['quote_count']
                }

                results.append(tweet)

        return results

    # redtideDB = RedTideDB()
    # redtideDB.addTweets(res)
    # redtideDB.close()
