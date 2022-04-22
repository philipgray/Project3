import configparser
import flask
from flask import request, jsonify, g
from flask_pymongo import PyMongo

config = configparser.ConfigParser()
config.read('config.ini')
mdb = config['mongoDB']

# establish the "connection string" that we use to connect to the db with.
cs = f"mongodb+srv://{mdb['username']}:{mdb['pw']}@{mdb['server']}/redtideDB"

app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.config["MONGO_URI"] = cs
mongo = PyMongo(app)


@app.route('/')
def home():
    return "<h1>hi my dearest friends my dog is barking my ear off and it hurts</h1>"


@app.route('/api/v1/redtide/tweets/all', methods=['GET'])
def api_all_tweets():
    test = mongo.db.tweets.find().sort([('_id', -1)]).limit(5)
    t = []
    for doc in test:
        t.append(doc)
    return jsonify(t)


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
