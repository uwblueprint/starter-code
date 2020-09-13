# Setup
### Software Prereqs:
- Homebrew, any version
- Git, any version
- Node, version: `10.*`
- Python, version: `3.7.*`
- Pipenv, any version
- PostgreSQL, version: `11.*`

1. Install Homebrew
    Install Homebrew by following the instructions at <https://brew.sh/>
    Once installed, you should be able to run `brew` on your terminal
    ```
    $ brew
    ```
2. Install Git
    ```
    $ brew install git
    ```
3. Install NodeJS
    ```
    $ brew install node
    ```
    Ensure you've installed the correct version
    ```
    $ node --version
    v10.15.2
    $ npm --version
    v6.4.1
    ```
4. Install Python
    ```
    $ brew install python
    ```
    Ensure you've installed the correct version
    ```
    $ python --version
    Python 3.7.2
    ```
5. Install Pipenv
    ```
    $ brew install pipenv
    ```
6. Install PostgreSQL (only if you plan on using postgres)
    ```
    $ brew install postgres
    ```
    Ensure you've installed the correct version
    ```
    $ postgres -V
    postgres (PostgreSQL) 11.2
    $ psql -V
    psql (PostgreSQL) 11.2
    ```
### Clone your Project:
If you're using `starter-code` as a base for a new project, see [Creating a Project](CREATING_A_PROJECT.md). You'll want to replace instances of `starter-code` with the name of your project.

If you're attending Blueprint bootcamp, read on

7. Get the code for the `starter-code` repository onto your computer.
    ```
    $ git clone https://github.com/uwblueprint/starter-code.git
    ```
8. Go into your project directory
    ```
    $ cd <my-project>
    ```
### Setup the Frontend:
9. Install node modules
    ```
    $ npm install
    ```
10. Install python modules
    ```
    $ pipenv install
    ```
The next step is to setup the backend. The setup instructions depends on which backend your team decided to use.
- [Setup Firebase Backend](#setup-firebase-backend)
- [Setup Python-Flask-Postgres Backend](#setup-python-flask-postgres-backend)

# Setup Firebase Backend
1. Install packages
    ```
    pip3 install firebase_admin
    ```

2. Create a Firebase project
    a. Go to the [web Firebase console](https://console.firebase.google.com) and create a new project.

    b. Click on Settings > Users and permissions, then add everyone on your team as a user.

3. Generate Firebase API key
    If there is already an existing API key, please ask whoever owns it to give it to you (not through git). In the future, we will figure out a better way of doing this. Otherwise, you need to generate a new Firebase API key:

    a. Go to the [Firebase console](https://console.firebase.google.com/u/1/project/startercode-98c1c/)
    b. Click on Settings > Service accounts > Generate new private key
    c. Share it with everyone that needs the private key. You can share this on Discord, although we probably should have better practices for sharing secrets.

4. Place in starter-code repository

    Create a config directory for the database.
    ```
    cd backend/db
    mkdir config
    cd config
    touch serviceAccountCredentials.json
    ```

    Copy the contents into `backend/db/config/serviceAccountCredentials.json`.

5. Start the Flask application and make sure the database is working
    ```
    $ cd <my-project>/backend
    $ python3 init_firestore_db.py
    ```
    In the firebase console, click on Database > Cloud Firestore. Verify that test data was created until the collection `recycled_material`. 

6. Set-up the frontend.

    a. Go to `src/index.js` and put in the firebase config. Instructions for how to get the config can be found [here](https://support.google.com/firebase/answer/7015592). 
    
    b. In `src/index.js`, uncomment the line `firebase.initializeApp(firebaseConfig);`
    
    c. In `/src/components/Display.js`, uncomment the line `this.fetchDataFirebase();`.
    
7. Congrats, you should be done. You can now run `npm start` in the `starter-code` directory and check out your app at `http://localhost:3000`. You should see a json blob of recycling data identical to what was in your Firestore database. 

# Setup Python-Flask-Postgres Backend
1. Install packages
    ```
    $ pip3 install flask_sqlalchemy
    ```

2. Start the postgres server, then enter the postgres terminal
    ```
    $ pg_ctl -D /usr/local/var/postgres start
    $ psql postgres
    ```

3. Create the database
    ```
    postgres=# CREATE DATABASE startercode;
    ```
    
    Then, exit the postgres shell.

4. Start the Flask application
    ```
    $ cd <my-project>
    $ pipenv shell
    $ flask run
    ```
5. Your API server should now be running, You can now run `npm start` in the `starter-code` directory and check out your app at `http://localhost:3000`. You should see two tables with recycling data. 
5. 
