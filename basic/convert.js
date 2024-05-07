//Create a function that reads image file in the jpg format from the 'images' folder and returns a list of the image file names.
//Image file extensions are not case sensitive.
//Use the fs module scope

import {file} from 'url';
import {dirname} from 'path';

export default convert;

// Path: basic/convert.test.js
console.log(convert()); // ['image1.jpg', 'image2.JPG', 'image3.Jpg']
const fs = require('fs');
const path = require('path');const fs = require('fs');
const path = require('path');

const convert = () => {
    const folderPath = path.join(__dirname, 'images');
    const files = fs.readdirSync(folderPath);
    return files.filter(file => path.extname(file).toLowerCase() === '.jpg');
};

module.exports = convert;

// Path: basic/convert.test.js
console.log(convert()); // ['image1.jpg', 'image2.JPG', 'image3.Jpg']
