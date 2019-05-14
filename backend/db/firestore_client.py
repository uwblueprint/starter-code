import os

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class FirestoreClient:
  # The values for the config can be found in Firebase Settings
  def __init__(self):
    # Generate a private key in Admin > Service accounts in the Firebase console, then place in serviceAccountCredentials.json

    dir_path = os.path.dirname(os.path.realpath(__file__))
    cred = credentials.Certificate(f"{dir_path}/config/serviceAccountCredentials.json")
    firebase_admin.initialize_app(cred)
    self.db = firestore.client()

  def create(self, table, data, primary_key=None):
    """
    Inserts data into the table under the given primary_key.

    table and primary_key should be in unicode
    """
    if primary_key == None:
      # Firestore auto-generates an ID when using `document()`
      # You can also use `self.db.collection(table).add(data)` to directly push data
      record = self.db.collection(table).document()
    else:
      record = self.db.collection(table).document(primary_key)
    record.set(data)

  def get(self, table):
    """Returns all data in the table"""
    return self.db.collection(table).get()

  def get(self, table, primary_key):
    """Returns data for a specific record in the table"""
    record = self.db.collection(table).document(primary_key)
    try:
      result = record.get()
      return result.val().to_dict()
    except google.cloud.exceptions.NotFound:
      return None

  def update(self, table, data, primary_key):
    """Updates data in the table under the given primary key"""
    record = self.db.collection(table).document(primary_key)
    record.update(data)

  def delete(self, table, data, primary_key):
    """
    Deletes data in the table under the given primary key.

    Warning: deleting a document doesn't delete subcollections!
    """
    self.db.collection(table).document(primary_key).delete()
