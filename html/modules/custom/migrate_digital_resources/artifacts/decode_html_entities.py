import json
import html

def deep_decode(obj):
    if isinstance(obj, list):
        return [deep_decode(e) for e in obj]
    if isinstance(obj, dict):
        return {key: deep_decode(value) for key, value in obj.items()}
    if isinstance(obj, str):
        return html.unescape(obj)
    return obj

with open("databases.json", "r") as infile:
    data = json.load(infile)

decoded_data = deep_decode(data)

with open("databases_decoded.json", "w") as outfile:
    json.dump(decoded_data, outfile)

print("Decoding complete. Check databases_decoded.json.")

