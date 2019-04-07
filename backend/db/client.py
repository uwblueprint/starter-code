from .models import RecycledMaterial

def get_all_classroom_data():
    return RecycledMaterial.query.all()
