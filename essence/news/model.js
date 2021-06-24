const {Schema, model} = require('mongoose');

const News = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, ref:'Category'},
    picture: {type: String},
    author: {type: String, ref: "User"},
    date: {type: Date, default: Date.now()}
})

module.exports = model('News', News);