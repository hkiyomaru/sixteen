from sixteen import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/lesson')
def lesson():
    return render_template('lesson.html')

@app.route('/requirement')
def requirement():
    return render_template('requirement.html')
