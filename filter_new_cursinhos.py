import json
import re

# Load parsed KML data
with open('clean_map.kml', 'r') as f:
    # We need to re-parse because we just dumped it to stdout in the previous step
    # Let's use the parse_kml function again or just rely on the output we saw.
    # Actually, better to re-run the parsing logic here to be safe and self-contained.
    pass

import xml.etree.ElementTree as ET

def parse_kml(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    content = re.sub(r'\sxmlns="[^"]+"', '', content, count=1)
    root = ET.fromstring(content)
    cursinhos = []
    for placemark in root.findall('.//Placemark'):
        name = placemark.find('name').text if placemark.find('name') is not None else "Sem Nome"
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
        coordinates = None
        point = placemark.find('.//Point/coordinates')
        if point is not None and point.text:
            coords = point.text.strip().split(',')
            if len(coords) >= 2:
                coordinates = [float(coords[1]), float(coords[0])]
        
        # Clean up social link
        if social and 'http' not in social:
             social = '' # invalid link
             
        cursinhos.append({
            'name': name,
            'address': address,
            'social': social,
            'type': type_,
            'coordinates': coordinates
        })
    return cursinhos

new_cursinhos_raw = parse_kml('clean_map.kml')

# Load existing partners to check for duplicates
# We'll do a simple fuzzy match on names
existing_partners_names = [
  "Amplia Educação", "Angola Janga", "Doar Educa", "ComunICA", "Equalizar - UFMG", 
  "AFIN - Cursinho Popular da UFU", "Conceição Evaristo", "Afirmativa", 
  "Consciência Negra - UFMG", "Vila Marçola", "Emancipa - BH", "Rede Cursinho Popular",
  "Cursinho Popular de Ibirité", "Cursinho Popular de Contagem", "Cursinho Popular de Betim",
  "Cursinho Popular de Sabará", "Cursinho Popular de Nova Lima", "Cursinho Popular Guimarães Rosa",
  "CCCP (Cursinho Comunitário)", "Cursinho Saberes", "Educa PET", "Cursinho Êxito", "Cursinho Popular Arandu"
]

def normalize(text):
    return text.lower().replace('cursinho', '').replace('popular', '').replace('pré-vestibular', '').strip()

existing_normalized = [normalize(n) for n in existing_partners_names]

to_add = []
for c in new_cursinhos_raw:
    name = c['name']
    norm_name = normalize(name)
    
    is_duplicate = False
    for existing in existing_normalized:
        if existing in norm_name or norm_name in existing:
            # Check for specific cases to avoid false positives/negatives
            if len(norm_name) > 3 and len(existing) > 3: # Avoid matching short acronyms vaguely
                is_duplicate = True
                break
    
    # Specific exclusion for known existing ones that might not match perfectly
    if "instituto equale" in name.lower(): is_duplicate = True
    
    if not is_duplicate:
        # Create a valid ID
        id_ = name.lower().replace(' ', '-').replace('á', 'a').replace('ã', 'a').replace('ç', 'c').replace('ê', 'e').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('(', '').replace(')', '').replace('/', '-').replace('--', '-')
        # Limit ID length and clean up
        id_ = re.sub(r'[^a-z0-9-]', '', id_)
        
        c['id'] = id_
        to_add.append(c)

print(json.dumps(to_add, indent=2, ensure_ascii=False))
