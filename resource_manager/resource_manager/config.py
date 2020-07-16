import os

TESTING = True
DEBUG = True
FLASK_ENV = 'development'
SECRET_KEY = b'|\xedC\xad_\xc3 \xbf\xd0\x89\xb6\x97\xb9\x87\xf1\x83'
SESSION_COOKIE_NAME = 'login'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024