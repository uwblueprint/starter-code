from flask import Blueprint
from flask import jsonify

from .db import client as db_client

blueprint = Blueprint('api', __name__)


@blueprint.route('/classrooms')
def classrooms():
    data = [row.teacher for row in db_client.get_all_classroom_data()]
    return jsonify(data)
    
