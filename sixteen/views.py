from sixteen import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/lesson/')
@app.route('/lesson/<lessonname>')
def lesson(lessonname=None):
    if lessonname:
        return render_template(lessonname+".html")
    else:
        return render_template('lesson.html')

@app.route('/requirement')
def requirement():
    return render_template('requirement.html')
