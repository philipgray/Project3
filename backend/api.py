import configparser
import flask
from flask import request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

config = configparser.ConfigParser()
config.read('config.ini')
mdb = config['mongoDB']

# establish the "connection string" that we use to connect to the db with.
cs = f"mongodb+srv://{mdb['username']}:{mdb['pw']}@{mdb['server']}/redtideDB"

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True
app.config["MONGO_URI"] = cs
mongo = PyMongo(app)


@app.route('/')
def home():
    return "no maidens?"


@app.route('/api/v1/redtide/tweets/all', methods=['GET'])
@cross_origin()
def api_all_tweets():
    """
    This method is used for getting and returning all tweets in our mongoDB.
    We use find() to get the tweets, and then we use sort().
    Sort uses the tweet id (_id) and displays it from the newest to the oldest.
    """
    tweets = mongo.db.tweets.find().sort([('_id', -1)])
    results = []
    for tweet in tweets:
        results.append(tweet)
    return jsonify(results)


@app.route('/api/v1/redtide/tweets', methods=['GET'])
@cross_origin()
def api_tweets():
    """
    This method is used for getting and getting x amount of tweets in our mongoDB.
    We use find() to get the tweets, and then we use sort().
    Sort uses the tweet id (_id) and displays it from the newest to the oldest.
    We then use limit to the latest x tweets.
    """
    if 'limit' in request.args:
        try:
            tweets = mongo.db.tweets.find().sort([('_id', -1)]).limit(request.args['limit'])
        except ValueError:
            raise ValueError(f"Not a valid ID.")

        else:
            results = []
            for tweet in tweets:
                results.append(tweet)

            return jsonify(results)
    else:
        return "Error: No limit provided. Please specify a limit.", 400
        
        
@app.route('/messages/all', methods=['GET'])
@cross_origin()
def api_all_messages():
    messages = mongo.db.messages.find().sort([('id', -1)])
    results = []
    for message in messages:
        results.append(message)
    return jsonify(results)
    
"""
@app.route('/api/v1/redtide/tweets', methods=['GET'])
def api_id():
    if 'id' in request.args:
        try:
            id = int(request.args['id'])
        except ValueError:
            raise ValueError(f"Not a valid ID.")
        else:
            results = []

            for tweet in testTweets:
                if tweet['id'] == id:
                    results.append(tweet)

            return jsonify(results)
    else:
        return "Error: No ID field provided. Please specify an ID.", 400
"""


@app.route('/api/v1/redtide/historical/month', methods=['GET'])
def api_last_month():
    return "hi this doesn't work yet :)"


# run the server
app.run()
