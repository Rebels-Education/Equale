import json
import re

# Load parsed KML data
# We will just re-parse the clean_map.kml we made
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
        
        cursinhos.append({
            'name': name,
            'address': address,
            'social': social,
            'type': type_,
            'coordinates': coordinates
        })
    return cursinhos

new_cursinhos = parse_kml('clean_map.kml')

# Existing IDs or Names to skip
skip_names = [
    "Amplia Educação", "Angola Janga", "Doar Educa", "ComunICA", "Equalizar", 
    "AFIN - Cursinho Popular da UFU", "Conceição Evaristo", "Afirmativa", 
    "Consciência Negra", "Vila Marçola", "Rede Emancipa", "Humanizar", 
    "Pró-ENEM - UFOP", "Cursinho Popular da Medicina", "Dom Quixote - UFMG", 
    "Cursinho Popular do CEFET-MG", "Guimarães Rosa", "Cursinho Saberes", 
    "Educa PET", "CCCP", "Cursinho Êxito", "Cursinho Popular Arandu",
    "Instituto Equale"
]

def is_duplicate(name, address):
    norm_name = name.lower()
    for skip in skip_names:
        if skip.lower() in norm_name:
            # Special handling for "Dom Quixote"
            if "dom quixote" in norm_name and "funec" in norm_name:
                return False # Keep FUNEC one
            if "dom quixote" in norm_name and "ufmg" in norm_name:
                return True # Skip UFMG one (already exists)
            
            # Special handling for "Emancipa"
            if "emancipa" in norm_name:
                 # We have "Rede Emancipa". If these are specific units, maybe keep?
                 # But "Rede Emancipa" usually covers them. 
                 # However, having points on the map is nice.
                 # Let's keep them but ensure IDs are unique.
                 return False 
            
            # Special handling for "Humanizar"
            if "humanizar" in norm_name:
                return True
                
            # Special handling for "Consciência"
            if "consciência" in norm_name:
                if "barreiro" in norm_name: return False # Keep Barreiro if distinct
                if "negra" in norm_name: return True # Skip existing
            
            return True
            
    # Check address for "Instituto Equale"
    if "instituto equale" in norm_name: return True
    
    return False

final_list = []
for c in new_cursinhos:
    if not is_duplicate(c['name'], c['address']):
        # Generate ID
        slug = c['name'].lower()
        slug = re.sub(r'[áàãâ]', 'a', slug)
        slug = re.sub(r'[éê]', 'e', slug)
        slug = re.sub(r'[í]', 'i', slug)
        slug = re.sub(r'[óôõ]', 'o', slug)
        slug = re.sub(r'[ú]', 'u', slug)
        slug = re.sub(r'[ç]', 'c', slug)
        slug = re.sub(r'[^a-z0-9]', '-', slug)
        slug = re.sub(r'-+', '-', slug).strip('-')
        c['id'] = slug
        final_list.append(c)

print(json.dumps(final_list, indent=2, ensure_ascii=False))
