module.exports.init = () => {

    const express = require('express');
    const app = express();
    const routes = require('./essence/index.routes');
    const fileUpload = require('express-fileupload');
    const bodyParser = require('body-parser');
    try {
        app.use(express.static('static'));
        app.use(express.json());
        app.use(fileUpload({}));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());


        app.use('/api', routes.userRouter);
        app.use('/api', routes.roleRouter);
        app.use('/api', routes.setupRouter);
        app.use('/api', routes.newsRouter);
        app.use('/api', routes.categoryNewsRouter);
        app.use('/api', routes.categoryServiceRouter);
        app.use('/api', routes.serviceRouter);

        return app;
    }catch (e) {
        console.log('Ошибка в блоке инициализации');
    }
}

module.exports.start = (app) => {
    const config = require('config');
    const port = config.get('port');
    try {
        app.listen(port);
        console.log(`Сервер запущен на http://localhost:${port}`);
    }catch (e) {
        console.log('Ошибка запуска');
    }
}