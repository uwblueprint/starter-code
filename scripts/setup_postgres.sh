#!/bin/bash
echo "Creating user database for $(whoami)"
createdb $(whoami)
echo

db_name='startercode'
db_user="${db_name}"
db_pass='password'

echo "Deleting database '${db_name}' if it already exists"
dropdb --if-exists "${db_name}"
echo "Deleting user '${db_user}' if it already exists"
psql -c "DROP ROLE IF EXISTS ${db_user};"
echo

echo "Creating user '${db_user}'"
psql -c "CREATE USER ${db_user} WITH PASSWORD '${db_pass}';"
echo "Creating database '${db_name}'"
createdb "${db_name}"
echo

echo "Created user and database."


