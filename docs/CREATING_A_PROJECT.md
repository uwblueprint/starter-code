# Creating a Project
This doc guides you through the steps to create your own project using the
starter code project skeleton we provide.
1. Choose a Backend
2. Integrate Additional Features
## Choosing a Backend
We provide two options for your project's backend.
### Option 1: Firebase + Cloud Firestore (NoSQL)
Firebase is Google's Backend-as-a-Service. It provides the following:
- Hosting  
    Website hosting. Provides a custom domain name and SSL.
- Cloud Firestore  
    A NoSQL database.
- Cloud Functions  
    Scripts that run on Firebase when triggered by an event. For example, run a 
    script that sends an email whenever a new user is created in the DB.
- Authentication  
    User authentication. Supports email + password, Facebook, Google, and more.
- Cloud Storage  
    Stores static assets such as PDFs, images, videos, files, etc.

More details: [Firebase Features](https://firebase.google.com/products/)  
Documentation: [Firebase Docs](https://firebase.google.com/docs/guides/)  

### Option 2: Python + Flask + Postgres (SQL)
Python is a popular programming language that's proven, easy to learn, and provides
fast development speed.  
Flask is a micro server framework for Python. It provides a simple framework to setup a
server, api endpoints, and handle http requests.  
Postgres is a relational database. SQLAlchemy is a Python SQL toolkit we use as an
interface to Postgres. We use the Flask-SQLAlchemy library to support SQLAlchemy for
our Flask application.

This option is ideal if you require backend functionality not supported by Firebase
and/or you need a relational database.  

[Flask Docs](http://flask.pocoo.org/docs/1.0/)  
[Postgres Docs](https://www.postgresql.org/docs/11/index.html)  
[SQLAlchemy Docs](https://docs.sqlalchemy.org/en/13/)  
[Flask-SQLAlchemy Docs](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)  

## Integrating Additional Features
TODO
