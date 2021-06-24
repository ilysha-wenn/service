const {Schema, model} = require('mongoose');

const Role = new Schema({
    role: {type: String, unique: true ,default: "CLIENT"}
})

module.exports = model('Role', Role);