const {Schema, model} = require('mongoose');

const Category = new Schema({
    category: {type: String, unique: true, default: "Общие"}
})

module.exports = model('Category', Category);