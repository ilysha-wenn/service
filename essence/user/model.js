const {Schema, model, ObjectId} = require('mongoose');


const User = new Schema({
    email : {type: String, required: true, unique: true},
    username : {type: String, required: true},
    password : {type: String, required: true},
    role: {type: String, ref:'Role'},
    age: {type: Number},
    files: [{type: ObjectId, ref: 'File'}],
    picture: {type: String},
    date: {type: Date, default: Date.now()},
})

module.exports = model('User', User);