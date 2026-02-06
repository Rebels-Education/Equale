import xml.etree.ElementTree as ET
import json
import re

def parse_kml(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Remove namespace prefixes to make parsing easier
    content = re.sub(r'\sxmlns="[^"]+"', '', content, count=1)
    
    root = ET.fromstring(content)
    
    cursinhos = []
    
    for placemark in root.findall('.//Placemark'):
        name = placemark.find('name').text if placemark.find('name') is not None else "Sem Nome"
        
        # Extract data from ExtendedData
        extended_data = {}
        for data in placemark.findall('.//Data'):
            key = data.get('name')
            value = data.find('value').text if data.find('value') is not None else ""
            extended_data[key] = value
            
        address = extended_data.get('Localização', '')
        if not address:
            address = placemark.find('address').text if placemark.find('address') is not None else ""
            
        social = extended_data.get('Rede social', '')
        type_ = extended_data.get('Tipo', '')
        
        # Try to find coordinates
        coordinates = None
        point = placemark.find('.//Point/coordinates')
        if point is not None and point.text:
            coords = point.text.strip().split(',')
            if len(coords) >= 2:
                coordinates = [float(coords[1]), float(coords[0])] # Lat, Lng
        
        cursinhos.append({
            'name': name,
            'address': address,
            'social': social,
            'type': type_,
            'coordinates': coordinates
        })
        
    return cursinhos

if __name__ == "__main__":
    file_path = '/home/ubuntu/page_texts/www.google.com_maps_d_u_0_kml_mid_1YCoPmDXxEOwHQOujTTKJ9UkywlR4r5I_forcekml_1.md'
    # The file saved by the browser tool might contain markdown headers, we need to strip them or handle them.
    # Actually, the file content shown in the tool output had markdown headers. 
    # Let's read the file, strip the first few lines until <kml>, and then parse.
    
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    kml_content = []
    start_collecting = False
    for line in lines:
        if '<kml' in line:
            start_collecting = True
        if start_collecting:
            kml_content.append(line)
            
    full_kml = "".join(kml_content)
    
    # Save clean KML for parsing
    with open('clean_map.kml', 'w') as f:
        f.write(full_kml)
        
    parsed_data = parse_kml('clean_map.kml')
    print(json.dumps(parsed_data, indent=2, ensure_ascii=False))
