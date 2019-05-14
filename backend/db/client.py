from .models import RecycledMaterial


def get_all_recycling_data():
    return RecycledMaterial.query.all()
