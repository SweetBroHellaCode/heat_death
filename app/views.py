from flask import render_template, Flask, request
from app import app, firebase_db

from firebase import firebase

@app.route('/')
@app.route('/index')
def index():
	return render_template("index.html", title='Home')

@app.route('/red-sun')
def red_sun():
	return render_template("red_sun.html", title='Red Sun')


@app.route('/getStory')
def getStory():
	result = firebase_db.get(request.args.get('story'), None)
	return result




