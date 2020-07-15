import flask
import resource_manager

@resource_manager.app.route('/api/')
def home():
    return flask.jsonify({ 'text': 'Hello World!' })

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