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

echo "Options:"
echo "1. Run Import Script"
echo "2. Start ddev"
read -p "Enter your choice: " choice

case $choice in
    1)
        # Download the aplcms-minus.sql.gz file
        curl -O https://library.austintexas.gov/library/aplcms-minus.sql.gz
        
        ddev composer update
        ddev import-db --file=aplcms-minus.sql.gz
        ddev drush cr
        ddev drush user:password drupaladmin '111'
        ddev launch user
        ;;
    2)
        # Starting ddev
        ddev start
        ;;
    *)
        echo "Invalid option selected."
        exit 1
        ;;
esac
