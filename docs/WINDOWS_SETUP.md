# Setup
## We will use
### Software Prereqs:
- Git, any version
- Node, version: `10.*`
- Python, version: `3.7.*`
- Pipenv, any version
- PostgreSQL, version: `11.*`

2. Install Git  
    Go to
    https://gitforwindows.org/

    During the installation, select "Checkout Windows-style, commit Unix-style line endings"

3. Install NodeJS  

    https://nodejs.org/en/download/
    Ensure you've installed the correct version; inside your git bash run the following commands
    ```
    $ node --version
    v10.15.2
    $ npm --version
    v6.4.1
    ```
4. Install Python  

    https://www.python.org/downloads/release/python-373/
    
    Install `Windows x86-64 executable installer` if your OS is 64-bit
    ```
    $ python --version
    Python 3.7.2
    ```
5. Install Pipenv  
    Open Windows Powershell and run the following command
    ```
    pip install pipenv
    ```
    Pip should have been included in the python install
6. Install PostgreSQL  
    Go to https://www.postgresql.org/download/windows/
    
    Download the 11.* version

    Make note of the user and password you setup; this will be used later.
    
7. Add psql bin directory to your path variable.
    Search for edit system environment variables

    Click the [Environment variables...] button

    Double click on the "Path" row

    In the dialog that opens press the [New] button and browse to your postgres bin directory; 

    It should look like "C:\Program Files\PostgreSQL\11\bin" unless you installed it somewhere different.

### Clone the Project:
7. Use git bash to clone the code for your project onto your computer. Replace `<my-project>` with the name of your project.  

    Open your git bash terminal, and navigate to a directory where you want to clone the code, and run the following command.
    ```
    $ git clone https://github.com/uwblueprint/<my-project>.git
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
TODO
1. Install Firebase Tools
2. Get Firebase API Keys

# Setup Python-Flask-Postgres Backend
TODO FLASK SETUP INSTRUCTIONS
1. Check your postgres service is running
    * [Windows key] + R and search for services.msc
    * Make sure `postgresql-x64-11` is running

2. Create postgres database
    * Open command prompt
    * Use >psql -U "[the username you set up earlier]" and enter your password to enter the postgres console
    * Create a database 
        ```
        CREATE DATABASE [Database_name]
        ```

