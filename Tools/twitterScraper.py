import configparser
from dateutil import parser
import requests

from Tools.dbBuddy import RedTideDB

config = configparser.ConfigParser()
config.read('config.ini')

bearer_token = config['twitter']['bearer']

search_url = "https://api.twitter.com/2/tweets/search/recent"
query_params = {
    'query': 'red tide -is:retweet -is:quote -roll -is:reply',
    'tweet.fields': 'created_at',
    'max_results': 10,
    'expansions': 'author_id'
}

# tweet.fields: ,public_metrics'


def bearer_oauth(r):

    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "RedTide Test"

    return r


def connect_to_endpoint(url, params):
    response = requests.get(url, auth=bearer_oauth, params=params)
    print(response.status_code)

    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()


def main():
    json_response = connect_to_endpoint(search_url, query_params)
    # pprint.pprint(json_response)

    res = []

    for data in json_response['data']:
        date = parser.parse(data['created_at'])
        tweet = {
            '_id': data['id'],
            'text': data['text'],
            'created_at': date,
            'link': f"https://www.twitter.com/twitter/status/{data['id']}"
        }
        res.append(tweet)

    redtideDB = RedTideDB()
    redtideDB.addTweets(res)
    redtideDB.close()

if __name__ == main():
    main()
