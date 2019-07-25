from flask import Flask, render_template,request


app = Flask(__name__)



@app.route('/')
def index():
    return '<hi>Hello!<h1>'
@app.route('/login',methods=['POST','GET'])
def login():
    if request.method =='POST':
        result =  request.form['firstname']

        return render_template('result.html',result=result)
    return render_template('login.html')

if __name__ == '__main__':
    app.run()
@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404
