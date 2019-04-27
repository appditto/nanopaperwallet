from flask import Flask
from app.settings import AppConfig
from app.controllers import HomeController
from app.extensions import webpack, cors
from werkzeug.contrib.fixers import ProxyFix

def create_app(config_object=AppConfig):
    """Application Factory Pattern"""
    app = Flask(__name__.split('.')[0])
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    app.wsgi_app = ProxyFix(app.wsgi_app)
    return app

def register_extensions(app):
    """Register Flask extensions."""
    webpack.init_app(app)
    cors.init_app(app)
    return None

def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(HomeController.blueprint)
    return None