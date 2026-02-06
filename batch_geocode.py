import json
import requests
import time
from urllib.parse import quote

# List of new cursinhos from previous step (manually copied or passed via file)
# In a real pipeline, we'd pass this as a file. Let's reconstruct the list from the output we saw.
# To save space, I'll only include the ones that need geocoding (coordinates is null)

cursinhos_to_geocode = [
  {"name": "ABMJovem Pré ENEM", "address": "Rua Samambaias, n 62, Bairro Nossa Senhora da Piedade, Justinópolis – Ribeirão das Neves/MG", "id": "abmjovem-pre-enem"},
  {"name": "Afin (UFU) - Ituiutaba", "address": "R. Vinte, 1600 - Tupã, Ituiutaba - MG, 38304-402", "id": "afin-ufu-ituiutaba"},
  {"name": "Afin (UFU) - Monte Carmelo", "address": "Monte Carmelo, MG", "id": "afin-ufu-monte-carmelo"}, # Address was empty, inferred
  {"name": "Afin (UFU) - Uberlândia", "address": "Av. João Naves de Ávila, 2121 - Santa Mônica, Uberlândia - MG, 38408-100", "id": "afin-ufu-uberlandia"},
  {"name": "Afin Patos de Minas UFU", "address": "R. Padre Pavoni, 290 - Rosário, Patos de Minas - MG, 38701-002", "id": "afin-patos-de-minas-ufu"},
  {"name": "Alternativo Alto Paranaíba", "address": "Campus UFU, Rua Goiás, 2000, Bairro Vila Nova, Monte Carmelo", "id": "alternativo-alto-paranaiba"},
  {"name": "Aprendendo a aprender", "address": "Av. Celina Ferreira Ottoni, 4000 - Padre Vitor, Varginha - MG, 37048-395", "id": "aprendendo-a-aprender"},
  {"name": "Cursinho Popular da UEMG - Passos", "address": "R. Dr. Carvalho, 1410 - Belo Horizonte, Passos - MG, 37902-520", "id": "cursinho-popular-da-uemg-passos"},
  {"name": "Educafro Minas", "address": "R. dos Timbiras, 1532 - Lourdes, Belo Horizonte - MG", "id": "educafro-minas-lourdes"},
  {"name": "Emancipa BH - Centro", "address": "Rua Guaicurus, 50 - Centro, Belo Horizonte - MG, 30111-060", "id": "emancipa-bh-centro"},
  {"name": "FACE Educa", "address": "Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG", "id": "face-educa"},
  {"name": "Futuro Pré-Vestibular Alternativo", "address": "R. José Rezende dos Santos, 1010 Brasil, Uberlândia MG, 38400-670", "id": "futuro-pre-vestibular-alternativo"},
  {"name": "GARRA Popular", "address": "Rua José Lourenço Kelmer, s/n - São Pedro, Juiz de Fora - MG", "id": "garra-popular"},
  {"name": "Podemos Mais - Viçosa", "address": "R. Antonio Valerio Pinheiro, s/n - Nova Viçosa, Viçosa - MG", "id": "podemos-mais-vicosa"},
  {"name": "Cursinho Popular - UFV", "address": "Av. P H Rolfs, s/n - Campus Universitário, Viçosa - MG", "id": "cursinho-popular-ufv"},
  {"name": "Popular Pró-Imigrantes", "address": "Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG", "id": "popular-pro-imigrantes"},
  {"name": "Pré Enem Helena Nunes - Guanabara", "address": "Quimquim do Mandú, 480 - Guanabara - Contagem/MG", "id": "pre-enem-helena-nunes-guanabara"},
  {"name": "Pré Enem Helena Nunes - Eldorado", "address": "Av. João César de Oliveira 2605 - Eldorado - Contagem/MG", "id": "pre-enem-helena-nunes-eldorado"},
  {"name": "PRÉ-UNI UFLA", "address": "Campus Histórico da UFLA, Lavras - MG", "id": "pre-uni-ufla"},
  {"name": "Transvest", "address": "R. da Bahia, 1148 – Centro, Belo Horizonte – MG", "id": "transvest"},
  {"name": "Voa, Papagaio!", "address": "R. Bolívia, 532 - Belo Horizonte, MG, 30330-360", "id": "voa-papagaio"},
  {"name": "Cursinho Dandara", "address": "Rua dos Quilombos, 287, Dandara, Belo Horizonte, Brazil", "id": "cursinho-dandara"},
  {"name": "Cursinho Popular INA", "address": "Rua Refinaria Gabriel Passos ,179 Bairro Petrolândia - Contagem", "id": "cursinho-popular-ina"}
]

geocoded_results = []

print(f"Geocoding {len(cursinhos_to_geocode)} addresses...")

for item in cursinhos_to_geocode:
    address = item['address']
    # Clean address for better hit rate
    clean_address = address.split('-')[0] + " " + address.split(',')[-1] if '-' in address else address
    if "MG" not in clean_address: clean_address += " MG"
    
    url = f"https://nominatim.openstreetmap.org/search?q={quote(clean_address)}&format=json&limit=1"
    headers = {'User-Agent': 'InstitutoEqualeWebsite/1.0'}
    
    try:
        response = requests.get(url, headers=headers)
        data = response.json()
        
        if data:
            lat = float(data[0]['lat'])
            lon = float(data[0]['lon'])
            item['coordinates'] = [lat, lon]
            print(f"✅ Found: {item['name']} -> {lat}, {lon}")
        else:
            item['coordinates'] = None
            print(f"❌ Not Found: {item['name']} ({clean_address})")
            
    except Exception as e:
        print(f"⚠️ Error geocoding {item['name']}: {e}")
        item['coordinates'] = None
        
    geocoded_results.append(item)
    time.sleep(1) # Respect Nominatim rate limit

# Save results
with open('geocoded_cursinhos.json', 'w') as f:
    json.dump(geocoded_results, f, indent=2, ensure_ascii=False)
