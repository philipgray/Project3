import configparser
import certifi
import flask

import time
from pymongo import MongoClient

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
client = MongoClient(cs, tlsCAFile=ca)


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
    """
    This method is used for returning the historical Tweet frequency from our database.
    The data originally came from Professor Skripnikov's research, and was processed by our
    historicalTweetAnalyzer.py.
    The data is already processed and formatted to go into a Google Charts component.
    """
    tweetHistory = mongo.db.tweetHistory.find_one()
    response = jsonify(tweetHistory['data'])
    return response


@app.route('/messages/all', methods=['GET'])
@cross_origin()
def api_all_messages():
    """
    This method is used for getting and returning all tweets in our mongoDB.
    We use find() to get the tweets, and then we use sort().
    Sort uses the tweet id (_id) and displays it from the newest to the oldest.
    """
    messages = mongo.db.messages.find().sort([('_id', -1)])
    results = []
    for message in messages:
        results.append(message)
    return jsonify(results)


@app.route('/messages/send')
@cross_origin()
def api_query_messages():
    inname = request.args.get('name')
    inlocation = request.args.get('location')
    inmessage = request.args.get('message')
    unixtime = time.time()
    db = client.redtideDB
    Message = {"name": inname, "location": inlocation, "message": inmessage, "_id": unixtime}
    db.messages.insert_one(Message)
    return '''<h1>{}{}{}</h1>'''.format(inname, inlocation, inmessage)


@app.route('/messages/post', methods=['POST'])
@cross_origin()
def api_post_messages():
    inname = request.form.get('name')
    inlocation = request.form.get('location')
    inmessage = request.form.get('message')

    unixtime = time.time()
    db = client.redtideDB
    Message = {"name": inname, "location": inlocation, "message": inmessage, "time": unixtime}
    db.messages.insert_one(Message)
    return '''<h1>{}{}{}</h1>'''.format(inname, inlocation, inmessage)


@app.route('/api/v1/redtide/youtube', methods=['GET'])
def api_youtube_video():
    """
    This method gets one of the recent youtube videos from our database.
    PARAMETERS
    add "?category=[category]" to the end of the URL, where [category] is the name of the topic
    to search from the database (what kind of video you want: symptoms, information, trending). The
    category must match the video's category stored in our database (not related to how YouTube organizes videos).
    """

    recentVideo = None

    # Use parameter in video
    if 'category' in request.args:

        # Search the database for videos in the chosen category
        youtube = mongo.db.youtube
        videoCategory = youtube.find({'category': request.args['category']}, sort=[('databaseInsertDate', -1)], limit=1)

        # This for loop is not the most elegant solution, but it works.
        # The .find result should only contain a single element, so this is still optimized
        for video in videoCategory:
            recentVideo = video

        if (recentVideo == None):
            print("Error: there is no video in this category")

    return recentVideo


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


@app.route('/api/v1/redtide/cellcounts', methods=['GET'])
@cross_origin()
def api_cell_counts():
    """
    This method is used for getting all of the algae cell count data in our database.
    We use find() to get all of the documents, then we use sort() to order them by county, alphabetically.
    """

    # Get a cursor to iterate over the documents
    documents = mongo.db.sensorData.find().sort([('county', 1)])

    data = []

    # Add every document to the list
    for entry in documents:
        # Remove ObjectID to avoid type conflicts
        entry.pop('_id')
        data.append(entry)

    return {'cellCountList': data}

"""
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
"""