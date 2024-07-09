#!/bin/bash

# Check if ddev is installed
if ! command -v ddev &> /dev/null
then
    echo "ddev could not be found"
    read -p "Do you want to install ddev now? (y/n) " yn
    case $yn in
        [Yy]* ) curl -fsSL https://raw.githubusercontent.com/drud/ddev/master/scripts/install_ddev.sh | bash;;
        [Nn]* ) echo "Skipping ddev installation."; exit;;
        * ) echo "Please answer yes or no."; exit;;
    esac
fi

# Function to import the database
import_database() {
  local db_file="$1"

  if [ -z "$db_file" ]; then
    db_file="aplcms-minus.sql.gz"
  fi

  if [ -f "$db_file" ]; then
    echo "Importing database from $db_file..."
    ddev stop --unlist aplcms-minus
    ddev composer update
    ddev import-db --file="$db_file"
    ddev drush cr
    ddev drush user:password drupaladmin '111'
    ddev launch user
    echo "Database imported successfully."
  else
    echo "Database file $db_file not found!"
  fi
}

echo "Options:"
echo "1. Download and import database"
echo "2. Start ddev"
echo "3. Import database from default location (aplcms-minus.sql.gz)"
echo "4. Import database from a specified file"
read -p "Enter your choice: " choice

case $choice in
    1)
        # Download the aplcms-minus.sql.gz file
        curl -O https://library.austintexas.gov/library/aplcms-minus.sql.gz
        
        import_database "aplcms-minus.sql.gz"
        ;;
    2)
        # Starting and launching ddev
        ddev launch
        ;;
    3)
        read -p "Use default location (aplcms-minus.sql.gz)? (Y/n): " use_default
        if [[ "$use_default" =~ ^[Yy]$ || -z "$use_default" ]]; then
            import_database
        else
            echo "Invalid option. Returning to main menu."
        fi
        ;;
    4)
        read -p "Enter the database filename: " db_file
        import_database "$db_file"
        ;;
    *)
        echo "Invalid option selected."
        exit 1
        ;;
esac
