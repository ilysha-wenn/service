const User = require('../model');
const Role = require('../role/role.model');
const fs = require('fs');
const config = require('config');
const fileService = require('../../../serviceFile');



module.exports.getAll = async () => {
    const users = await User.find();
    return users;
}

module.exports.getOne = async (id) => {
    if(!id) throw new Error('Не указан id');
    const user = await User.findById(id);
    return user;
}

module.exports.update = async (data) => {
    const newUser = await User.findByIdAndUpdate(data._id, data, {new: true });
    return newUser;
}

module.exports.delete = async (id) => {
    if(!id) throw new Error('Не указан id');
    await User.findByIdAndDelete(id);
}

module.exports.findByRole = async(role) => {
    const users = await User.find({role: role});
    return users;
}

module.exports.deleteAvatar = async (data) => {
    const {id} = data;
    if(!id) throw new Error('Не указан id');
    const user = await User.findById(id);
    fs.unlinkSync(config.get('static') + + "\\" + user.picture);
    user.picture = null;
    await user.save();
    return user;
}

module.exports.uploadAvatar = async (data, picture) => {
    const {id} = data;
    if(!id) throw new Error('Не указан id');
    const user = await User.findById(id);
    if(!user) throw new Error('Не существует пользователя');
    const fileName = fileService.saveFile(picture);
    user.picture = fileName;
    await user.save();
    return user;
}