const News = require('./model');
const User = require('../user/model');
const NewsCategory = require('./category/category.model');
const fileService = require('../../serviceFile');

module.exports.create = async(data, picture) => {
    const {title, content, category ,author} = data;
    const fileName = fileService.saveFile(picture);

    const postAuthor = await User.findOne({username: author});
    if(!postAuthor) throw new Error('Такого пользователя не существует');

    const newsCategory = await NewsCategory.findOne({category: category});
    if(!newsCategory) throw new Error('Такой категории не существует');

    const news = await News.create({
        title: title,
        content: content,
        author: postAuthor.username,
        category: newsCategory.category,
        picture: fileName
    })
    return news;
}
module.exports.getAll = async() => {
    const news = await News.find();
    return news;
}
module.exports.getOne = async(id) => {
    if(!id) throw new Error('Не указан id');
    const news = await News.findById(id);
    return news;
}
module.exports.update = async(data) => {
    if(!data._id) throw new Error('Не указан id');
    const upd = await News.findByIdAndUpdate(data._id, data, { new: true });
    return upd;
}
module.exports.delete = async(id) => {
    if(!id) throw new Error('Не указан id');
    await News.findByIdAndDelete(id);
}
module.exports.getByCategory = async(category) => {
    const news = await News.find({category: category});
    return news;
}

module.exports.find= async(text) => {
    const news = await News.find({title: text});
    return news;
}