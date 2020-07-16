import flask
import json
import os.path
import resource_manager

@resource_manager.app.route('/api/')
def home():
    '''Retrieve projects data from json.'''
    response = dict()
    try:
        file_path = os.path.join(os.path.dirname(__file__), '../data/home.json')
        print(file_path)
        with open(file_path, 'r') as home_file:
            json_data = home_file.read()
            response = json.loads(json_data)
    except:
        raise BadAccess(
            'Not Found',
            status_code=404,
            content="Home page data could not be retrieved."
        )
    return flask.jsonify(response)

class BadAccess(Exception):
    """Exception class for bad access."""
    def __init__(self, message, status_code=None, content=None):
        """Initialize an exception with optional error code and payload."""
        Exception.__init__(self)
        self.message = message
        self.content = content
        if status_code is not None:
            self.status_code = status_code

    def to_dictionary(self):
        """Convert payload into dictionary for usage in API."""
        dict = {
            'message': self.message,
            'status_code': self.status_code
        }
        return dict

@resource_manager.app.errorhandler(BadAccess)
def handle_bad_access(error):
    '''Process error handling from bad access'''
    response = flask.jsonify(error.to_dictionary())
    response.status_code = error.status_code
    return response