from App import app
from flask import Flask, render_template, request, redirect, url_for, flash
# import bcrypt

@app.route('/')

def Default():

    return render_template('Loginnew.html')
# fdfd
#asda
# xdasdadasdasdad