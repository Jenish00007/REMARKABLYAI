import os
from PIL import Image

# Input and output folder paths
input_folder = 'D:\Live Projects\Jewellery_Shop\image_convert\img2'  
output_folder = 'D:\Live Projects\Jewellery_Shop\image_convert\img2_out'

def convert():
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Loop through all files in the input folder
    for filename in os.listdir(input_folder):
        # Check if the file is a JPEG or PNG image
        if filename.endswith(".jpg") or filename.endswith(".png"):
            # Create the full file path
            full_file_path = os.path.join(input_folder, filename)

            # Open the image
            image = Image.open(full_file_path)

            # Convert the image to WebP format
            webp_file_path = os.path.join(output_folder, filename.replace(".jpg", ".webp").replace(".png", ".webp"))
            image.save(webp_file_path, "webp")

            print(f"Converted {filename} to WebP format.")

if __name__ == "__main__":
    convert()