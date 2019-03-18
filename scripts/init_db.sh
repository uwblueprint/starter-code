#!/bin/bash
createdb $(whoami) &> /dev/null # fixes postgres error

db_name='test_db'
db_user="$db_name"
db_pass='password'

dropdb --if-exists "$db_name"
psql -tAc "DROP ROLE IF EXISTS ${db_user};" &> /dev/null

psql -tAc "CREATE USER $db_user WITH PASSWORD '${db_pass}';" &> /dev/null
createdb "$db_name"

echo "Created user and database."
