import os

from flask import Flask


def create_app():
    app = Flask(__name__)

    from .db.init_db import init_db
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    init_db(app = app)

    from . import routes
    app.register_blueprint(routes.blueprint)

    return app
