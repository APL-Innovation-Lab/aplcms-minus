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
        read -p "Is the aplcms-minus.sql.gz file already present in the directory? (y/n) " file_present
        case $file_present in
            [Yy]* )
                # If the file is present, proceed with the import
                ;;
            [Nn]* )
                # If the file is not present, download it
                read -p "Please provide the URL to download aplcms-minus.sql.gz: " file_url
                curl -o aplcms-minus.sql.gz $file_url
                ;;
            * ) echo "Please answer yes or no."; exit;;
        esac
        
        # Running import.sh contents
        ddev stop --unlist aplcms-minus
        
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
