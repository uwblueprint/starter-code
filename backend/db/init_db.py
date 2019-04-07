import os

from csv import reader

def _get_data():
    filepath = os.path.join(os.getcwd(), 'backend/db/StarterCodeSampleData.csv')
    with open(filepath) as data:
        csv_reader = reader(data)

        header = [column.lower() for column in next(csv_reader)]
        return [zip(header, row) for row in csv_reader]


def _init_firestore_db():
    pass


def _init_postgres_db(app):
    from . import db
    from .models import RecycledMaterial

    # Fixes a weird SQLAlchemy issue
    app.app_context().push()
    db.init_app(app)

    # Clear database tables
    db.reflect()
    db.drop_all()

    # Init database tables
    db.create_all()

    # Seed database with sample data
    data = _get_data()
    for row in data:
        db.session.add(RecycledMaterial(**dict(row)))
    db.session.commit()


def init_db(app, backend_store):
    if backend_store == 'firebase':
        _init_firestore_db()
    elif backend_store == 'flask':
        return _init_postgres_db(app)
    else:
        print("Backend config error")
