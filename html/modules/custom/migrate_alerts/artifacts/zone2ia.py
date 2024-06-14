import json

def main():
    # Substitution dictionary
    substitutions = {
        "1682": "5190",
        "1685": "183",
        "4937": "5194",
        "1683": "204",
        "4878": "5195",
        "4894": "5188",
        "1686": "5196",
        "1684": "32"
    }

    # Open and read the alerts.json file
    try:
        with open('alerts.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        print("File alerts.json not found in the current directory.")
        return

    # Extract the 'alert' list from data
    alert_list = data.get('alert', [])

    # Make sure alert_list is a list
    if not isinstance(alert_list, list):
        print("Expected a list of dictionaries under the 'alert' key in alerts.json")
        return

    # Iterate through the entries and update field_locations
    for entry in alert_list:
        if not isinstance(entry, dict):
            print(f"Skipping entry because it is not a dictionary: {entry}")
            continue
        
        old_locations = entry.get('field_locations', "")
        
        if old_locations:
            # Split the comma-separated values into a list
            old_locations_list = old_locations.split(',')
            
            # Apply substitutions
            new_locations_list = [substitutions.get(str(zone).strip(), str(zone).strip()) for zone in old_locations_list]
            
            # Join the list back into a comma-separated string
            new_locations = ', '.join(new_locations_list)
            
            entry['field_locations'] = new_locations

    # Write the updated data back to alerts.json
    with open('alerts.json', 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    main()
