import configparser
import certifi
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

# Allow CORS - for these calls to be accessed from any browser
CORS(app)
app.config["DEBUG"] = True
app.config["MONGO_URI"] = cs
ca = certifi.where()
mongo = PyMongo(app, tlsCAFile=ca)


@app.route('/')
def home():
    return "welcome"


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


@app.route('/api/v1/redtide/tweets/history/frequency', methods=['GET'])
def api_historical_tweet_frequency():
    tweetHistory = mongo.db.tweetHistory.find_one()
    response = jsonify(tweetHistory['data'])
    # response.headers.add("Access-Control-Allow-Origin", "*")
    return response


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
            tweets = mongo.db.tweets.find().sort([('_id', -1)]).limit(int(request.args['limit']))
        except ValueError:
            return ValueError(f"Invalid Limit"), 400

        else:
            results = []
            for tweet in tweets:
                results.append(tweet)

            return jsonify(results)
    else:
        return "Error: No limit provided. Please specify a limit.", 400


@app.route('/api/v1/redtide/historical/month', methods=['GET'])
def api_last_month():
    return "hi this doesn't work yet :)"


# run the server
app.run()
