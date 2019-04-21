import os
import sys

if not os.environ.get("PROJECT_NAME"):
    print("Error: PROJECT_NAME environment variable not found!")
    print("If you're developing locally, check that you're running your command in pipenv.")
    sys.exit(1)
