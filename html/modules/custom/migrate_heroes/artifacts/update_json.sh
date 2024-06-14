#!/bin/bash

# Check if enough arguments are provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 [arg] [json_filename]"
  exit 1
fi

# Assign arguments to variables
ARG="$1"
JSON_FILENAME="$2"

# Check if the JSON file exists
if [ ! -f "$JSON_FILENAME" ]; then
  echo "File $JSON_FILENAME does not exist."
  exit 1
fi

# Define the prefix and suffix
PREFIX="{\"$ARG\": "
SUFFIX="}"

# Create a new filename
NEW_JSON_FILENAME="${JSON_FILENAME%.json}.new.json"

# Add prefix, content of original json, and suffix to the new json file
echo -n $PREFIX > "$NEW_JSON_FILENAME"
cat "$JSON_FILENAME" >> "$NEW_JSON_FILENAME"
echo $SUFFIX >> "$NEW_JSON_FILENAME"

echo "New JSON file has been created: $NEW_JSON_FILENAME"

