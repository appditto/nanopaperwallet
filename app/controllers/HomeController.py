from flask import Blueprint, render_template, request, abort, jsonify
import requests

blueprint = Blueprint('home', __name__, static_folder='../static')

@blueprint.route('/', defaults={'path': ''})
@blueprint.route('/<path:path>')
def index(path):
    return render_template('app.html')