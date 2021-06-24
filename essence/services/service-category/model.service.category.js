const {Schema, model} = require('mongoose');

const Category = new Schema({
    category: {type: String, unique: true, default: "Разнорабочая услуга"}
})

module.exports = model('Service-Category', Category);