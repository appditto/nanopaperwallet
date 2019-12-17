#!/usr/bin/env python
from gevent import monkey
monkey.patch_all()

from flask.helpers import get_debug_flag
from app.settings import AppConfig
from app.app import create_app

app = create_app(AppConfig)

if __name__ == "__main__" and get_debug_flag():
    app.run()