from PIL import Image, ImageOps
import os

def process_logo(input_path, output_path, max_height=80, force_white_bg_removal=True):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Se o pixel for branco (ou quase branco), torna transparente
            if force_white_bg_removal and item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Recortar espaços vazios
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        # Redimensionar mantendo proporção (altura fixa para padronização visual)
        ratio = max_height / img.height
        new_width = int(img.width * ratio)
        img = img.resize((new_width, max_height), Image.Resampling.LANCZOS)
        
        img.save(output_path, "PNG")
        print(f"Imagem processada salva em: {output_path} (Tamanho: {new_width}x{max_height})")
    except Exception as e:
        print(f"Erro ao processar {input_path}: {e}")

# Processar Sada
process_logo("/home/ubuntu/instituto_equale_website/sada_raw.png", "/home/ubuntu/instituto_equale_website/client/public/images/partners/sada.png")

# Reprocessar O Tempo (garantir qualidade)
process_logo("/home/ubuntu/upload/search_images/BgE1X6imb6T3.png", "/home/ubuntu/instituto_equale_website/client/public/images/partners/otempo.png")

# Reprocessar Bernoulli (garantir qualidade e proporção)
# Usando a imagem original baixada anteriormente
process_logo("/home/ubuntu/upload/search_images/0V6VPFlwpAKV.png", "/home/ubuntu/instituto_equale_website/client/public/images/partners/bernoulli.png")
