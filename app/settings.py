import os

class AppConfig(object):
    SECRET_KEY = os.environ.get('APP_SECRET', 'secret-key')
    # Paths
    APP_DIR = os.path.abspath(os.path.dirname(__file__))  # This directory
    STATIC_DIR = os.path.abspath(os.path.join(APP_DIR, 'static', 'build'))
    PROJECT_ROOT = os.path.abspath(os.path.join(APP_DIR, os.pardir))
    BCRYPT_LOG_ROUNDS = 13
    # Webpack
    WEBPACK_MANIFEST_PATH = 'webpack/manifest.json'