from flask import Blueprint
from flask import jsonify

from .db import client as db_client

blueprint = Blueprint('api', __name__)


@blueprint.route('/recycling-data')
def get_recycling_data():
    data = [row.to_dict() for row in db_client.get_all_recycling_data()]
    return jsonify(data)
