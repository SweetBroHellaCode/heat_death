from flask import Flask 

app = Flask(__name__)
app.config.from_object('config')

from firebase import firebase

firebase_db = firebase.FirebaseApplication(app.config["FIREBASE_DB_URL"][0], None)

from app import views
