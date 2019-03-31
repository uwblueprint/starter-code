from flask import Blueprint
from flask import jsonify

import backend.db.client as db_client

blueprint = Blueprint('api', __name__)


@blueprint.route('/classrooms')
def classrooms():
    return jsonify(db_client.get_all_classroom_data())
    
