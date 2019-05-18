import csv
from .db.firestore_client import FirestoreClient

class RecycledMaterial:
    FIRESTORE_TABLE = 'recycled_material'

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

    def write_to_firebase_from_csv(self, filename):
        """
        Dumps all data from a csv into a Firebase store.

        Assumes first column of csv is the primary key.
        """
        firestore_client = FirestoreClient()
        with open(filename) as csvfile:
            reader = csv.reader(csvfile, delimiter = ',')
            next(reader) # skip header row
            for row in reader:
                primary_key = row[0]
                data = self.row_to_record_data(row)
                firestore_client.create(self.FIRESTORE_TABLE, data, primary_key)

    def row_to_record_data(self, row):
        """
        The row should have the following columns:
        Classroom, Aluminum, Batteries, Bottles, Cans, Cardboard,
        Computer Parts, Glass, Paper, Wood
        """
        data = {}
        for i in range(len(self.RECYCLED_MATERIAL_TYPES)):
            # first column of row is primary key
            data[self.RECYCLED_MATERIAL_TYPES[i]] = row[i+1]
        return data
