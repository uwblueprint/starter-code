import csv
import os

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

dir_path = os.path.dirname(os.path.realpath(__file__))

FIRESTORE_TABLE = "recycled_material"
FIRESTORE_PRIVATE_KEY = f"{dir_path}/db/config/serviceAccountCredentials.json"
FIRESTORE_DATA_CSV = f"{dir_path}/db/StarterCodeSampleData.csv"

RECYCLED_MATERIAL_TYPES = [
    'aluminum',
    'batteries',
    'bottles',
    'cans',
    'cardboard',
    'computer_parts',
    'glass',
    'paper',
    'wood'
]

def write_to_firebase_from_csv(filename):
    """
    Dumps all data from a csv into a Firebase store.

    Assumes first column of csv is the primary key.
    """
    firestore_client = init_firestore()
    with open(filename) as csvfile:
        reader = csv.reader(csvfile, delimiter = ',')
        next(reader) # skip header row
        for row in reader:
            primary_key = row[0]
            data = row_to_record_data(row)

            record = firestore_client.collection(FIRESTORE_TABLE).document(primary_key)
            record.set(data)

def row_to_record_data(row):
    """
    The row should have the following columns:
    Classroom, Aluminum, Batteries, Bottles, Cans, Cardboard,
    Computer Parts, Glass, Paper, Wood
    """
    data = {}
    for i in range(len(RECYCLED_MATERIAL_TYPES)):
        # first column of row is primary key
        data[RECYCLED_MATERIAL_TYPES[i]] = row[i+1]
    return data

def init_firestore():
    """
    Passes in private key and returns a firestore client with admin access
    """
    cred = credentials.Certificate(FIRESTORE_PRIVATE_KEY)
    firebase_admin.initialize_app(cred)

    return firestore.client()

if __name__ == "__main__":
    write_to_firebase_from_csv(FIRESTORE_DATA_CSV)
