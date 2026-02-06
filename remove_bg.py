from PIL import Image
import os

def remove_white_background(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Change all white (also shades of whites)
            # to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully saved transparent image to {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

input_file = "/home/ubuntu/instituto_equale_website/client/public/images/logo-equale-main.png"
output_file = "/home/ubuntu/instituto_equale_website/client/public/images/logo-equale-transparent.png"

if os.path.exists(input_file):
    remove_white_background(input_file, output_file)
else:
    print(f"Input file not found: {input_file}")
