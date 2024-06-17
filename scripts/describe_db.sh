#!/bin/bash

# Get the list of all tables
tables=$(ddev drush sqlq "SHOW TABLES;")

# Iterate over each table and describe its structure
for table in $tables; do
  echo "Table: $table"
  ddev drush sqlq "DESCRIBE $table;"
done