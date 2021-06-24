module.exports.connect = async() => {
    const config = require('config');
    const mongoose = require('mongoose');
    options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true };
    try {
        await mongoose.connect(config.get('db_url', options))
        console.log('База данных успешно запущена');
    }catch (e) {
        console.log('Ошибка в блоке старта базы данных');
    }
}