from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Se o pixel for branco (ou quase branco), torna transparente
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Recortar espaços vazios
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Imagem processada salva em: {output_path}")

# Usar a imagem 1 que parece ser a mais limpa e horizontal
remove_background("/home/ubuntu/upload/search_images/BgE1X6imb6T3.png", "/home/ubuntu/instituto_equale_website/client/public/images/partners/otempo.png")
