#Create a function that reads image file in the jpg format from the 'images' folder and returns a list of the image file names.
#Image file extensions are not case sensitive.
#img1.jpg
#img2.JPG
#img3.jpg


#The function should return the following list:
#['img1.jpg', 'img2.JPG', 'img3.jpg']

import os

def read_images():
    images = []
    for file in os.listdir('images'):
        if file.lower().endswith('.jpg'):
            images.append(file)
    return images

print(read_images())
#['img1.jpg', 'img2.JPG', 'img3.jpg']

