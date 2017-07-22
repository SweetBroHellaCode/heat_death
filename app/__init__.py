from flask import Flask 

app = Flask(__name__)
app.config.from_object('config')

import os
import sys

# Add vendor directory to module search path
parent_dir = os.path.abspath(os.path.dirname(__file__))
vendor_dir = sys.path.append(parent_dir + '/vendor')

from firebase import firebase

firebase_db = firebase.FirebaseApplication(app.config["FIREBASE_DB_URL"][0], None)

from app import views
