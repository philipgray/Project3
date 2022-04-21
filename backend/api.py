import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

testTweets = [
    {
        'id': 0,
        'tweet': 'yoooooooooooooooooooooooooo whats up red tide sucks :('
    },
    {
        'id': 1,
        'tweet': 'yo dawg i really hate red tide wtf up who did that'
    }
]


@app.route('/')
def home():
    return "<h1>hi my dearest friends my dog is barking my ear off and it hurts</h1>"


@app.route('/api/v1/redtide/tweets/all', methods=['GET'])
def api_all_tweets():
    return jsonify(testTweets)


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


@app.route('/api/v1/redtide/historical/month', methods=['GET'])
def api_all_tweets():
    return jsonify(testTweets)


# run the server
app.run()
