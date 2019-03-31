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
6. Install PostgreSQL  
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
7. Get the code for your project onto your computer. Replace `<my-project>` with the name of your project.  
    ```
    $ git clone https://github.com/uwblueprint/<my-project>.git
    ```
8. Go into your project directory  
    ```
    $ cd <my-project>
    ```
### Setup Frontend:
Run the following in your project's root directory. The root directory should be where `Pipfile` and `package.json` are.
9. Install node modules  
    ```
    $ npm install
    ```
    You should now be able to start a frontend dev server
    ```
    $ npm start
    ```
The next step is to setup the backend. The setup depends on which backend your team decided to use.
- [Setup Firebase Backend](#setup-firebase-backend)
- [Setup Python-Flask-Postgres Backend](#setup-python-flask-postgres-backend)

# Setup Firebase Backend
1. Get Firebase API Keys
TODO

# Setup Python-Flask-Postgres Backend
1. Install python modules  
    ```
    $ pipenv install
    ```
    You should now be able to start an api server
    ```
    $ pipenv run flask run
    ```
TODO
