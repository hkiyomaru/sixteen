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
@app.route('/lesson/<lessonname>/<lessonno>')
def lesson(lessonname=None, lessonno=None):
    if lessonname and lessonno:
        return render_template(lessonname+lessonno+".html", lessonname=lessonname, lessonno=lessonno)
    if lessonname:
        return render_template(lessonname+".html", lessonname=lessonname)
    else:
        return render_template('lesson.html')

@app.route('/requirement')
def requirement():
    return render_template('requirement.html')
