const uuid = require('uuid');
const path = require('path');
const config = require('config');

module.exports.saveFile = (file) => {
    try {
        const fileName = uuid.v4() + '.jpg';
        const filePath = path.resolve('static', fileName);
        file.mv(filePath);
        return fileName;
    } catch (error) {console.log(error)}
}