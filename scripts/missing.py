import requests
from bs4 import BeautifulSoup
import os
import sys

def create_local_path(url, local_base_path, base_url):
    if url.startswith(('http://', 'https://')):
        url = url.split(base_url)[-1]
    url = url.split('?')[0]
    local_path = os.path.join(local_base_path, url.lstrip('/'))
    return local_path

def url_exists_locally(url, local_base_path, base_url):
    local_path = create_local_path(url, local_base_path, base_url)
    return os.path.exists(local_path)

def fetch_html_content(url):
    response = requests.get(url)
    return response.text if response.status_code == 200 else None

def extract_image_urls(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    img_tags = soup.find_all('img')
    image_urls = [tag['src'] for tag in img_tags if 'src' in tag.attrs and not tag['src'].startswith(('http://', 'https://'))]
    return image_urls

def download_image(image_url, local_base_path, base_url, remote_base_url):
    attempt_paths = [image_url, image_url.replace('/sites/default/files', '/library')]
    for path in attempt_paths:
        full_image_url = remote_base_url + path if not path.startswith(('http://', 'https://')) else path
        local_path = create_local_path(image_url, local_base_path, base_url)
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        response = requests.get(full_image_url)
        if response.status_code == 200:
            with open(local_path, 'wb') as file:
                file.write(response.content)
            print(f"Downloaded to {local_path}")
            break
    else:
        print(f"Failed to download from all attempted paths for {image_url}")

def main():
    # Use the fixed local development URL directly
    local_base_url = 'http://aplcms-minus.ddev.site'
    remote_base_url = 'https://library.austintexas.gov'
    html_directory = './html'
    
    start_url_path = sys.argv[1] if len(sys.argv) > 1 else ''
    start_url = f"{local_base_url}/{start_url_path.lstrip('/')}" if start_url_path else local_base_url

    html_content = fetch_html_content(start_url)
    if html_content:
        image_urls = extract_image_urls(html_content)
        for url in image_urls:
            if not url_exists_locally(url, html_directory, local_base_url):
                download_image(url, html_directory, local_base_url, remote_base_url)
    else:
        print("Failed to fetch HTML content.")

if __name__ == "__main__":
    main()
