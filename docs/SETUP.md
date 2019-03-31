# Setup
### Software Prereqs:
- Homebrew
- Git
- Node, version: `10.*`
- Python, version: `3.7.*`
- PostgreSQL, version: `11.*`

1. Homebrew  
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
5. Install PostgreSQL  
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
### Clone the Project:
1. Get the code for the starter-code project onto your computer  
    ```
    $ git clone https://github.com/uwblueprint/starter-code.git
    ```
2. Go into the starter-code project directory  
    ```
    $ cd starter-code
    ```
### Install Project Dependencies:
Run the following in the project's root directory. The root directory is where `Pipfile` and `package.json` live.
1. Install node modules  
    ```
    $ npm install
    ```
    You should now be able to start a frontend dev server
    ```
    $ npm start
    ```
2. Install python modules  
    ```
    $ pipenv install
    ```
    You should now be able to start an api server
    ```
    $ pipenv run flask run
    ```
