const Service = require('./model');
const fileService = require('../../serviceFile');
const User = require('../user/model');
const ServiceCategory = require('./service-category/model.service.category');

module.exports.create = async(data, picture)=>{
    const {title, content, category, author} = data;
    const fileName = fileService.saveFile(picture);

    const postAuthor = await User.findOne({username: author});
    if(!postAuthor) throw new Error('Такого пользователя не существует');

    const serviceCategory = await ServiceCategory.find({category: category});
    if(!serviceCategory) throw new Error('Такой категории не существует');

    const service = await Service.create({
        title: title,
        content: content,
        author: postAuthor.username,
        category: serviceCategory.category,
        picture: fileName
    });

    return service;
}
module.exports.getAll = async()=>{
    const services = await Service.find();
    return services;
}

module.exports.getOne = async(id)=>{
    if(!id) throw new Error('Не указан id');
    const services = await Service.findById(id);
    return services;
}

module.exports.update = async(data)=>{
    if(!data._id) throw new Error('Не указан id');
    const upd = await Service.findByIdAndUpdate(data._id, data, { new: true });
    return upd;
}

module.exports.delete = async(id)=>{
    if(!id) throw new Error('Не указан id');
    await Service.findByIdAndDelete(id);
}
module.exports.findByCategory = async(category)=>{
    if(!category) throw new Error('Ошибка в категориях');
    const service = await Service.find({category: category});
    return service;
}