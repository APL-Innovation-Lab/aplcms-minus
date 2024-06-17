ddev drush sql-cli < sanitize.sql
ddev drush user:password User1 '111'
ddev drush cex -y
cp config/* ../html/sites/default/files/sync
ddev drush cim -y
ddev drush cr
ddev launch
