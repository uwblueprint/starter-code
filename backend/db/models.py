from . import db

class RecycledMaterial(db.Model):
    __tablename__ = 'recycled_material'

    id = db.Column(db.Integer, primary_key=True)
    teacher = db.Column(db.String(255), nullable=False)
    aluminum = db.Column(db.Integer)
    batteries = db.Column(db.Integer)
    bottles = db.Column(db.Integer)
    cans = db.Column(db.Integer)
    cardboard = db.Column(db.Integer)
    computer_parts = db.Column(db.Integer)
    glass = db.Column(db.Integer)
    paper = db.Column(db.Integer)
    wood = db.Column(db.Integer)