import flask
# from pymongo import MongoClient

app = flask.Flask(__name__)

app.config.from_object('resource_manager.config')

import resource_manager.api

# client = MongoClient('url')