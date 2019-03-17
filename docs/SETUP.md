# Setup
### Software Prereqs:
- Homebrew
- Node, version: 10.\*
- Python, version: 3.7.\*
- PostgreSQL, version: 11.\*

1. Homebrew
Install Homebrew by following the instructions at <https://brew.sh/>
You should now be able to run brew on your command line
```
$ brew
```

2. Install NodeJS
```
brew install node
```
Ensure you've installed the correct version
```
$ node --version
v10.15.2
$ npm --version
v6.4.1
```

3. Install Python
```
brew install python
```
Ensure you've installed the correct version
```
$ python --version
Python 3.7.2
```

4. Install PostgreSQL
```
brew install postgres
```
Ensure you've installed the correct version
```
$ postgres -V
postgres (PostgreSQL) 11.2
$ psql -V
psql (PostgreSQL) 11.2
```

### Project dependencies:  
Run the following in the project's root directory.  
The root directory is where `Pipfile` and `package.json` live.
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

### Development

Run the following to format python code:
```
yapf backend -r -i
```
