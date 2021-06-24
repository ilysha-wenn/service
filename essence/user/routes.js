const router = require('express').Router();
const controller = require('./controller');
const {check} = require('express-validator');

router.post('/user/registration', [
        check('email', 'Почтовый адресс введён не корректно').isEmail().notEmpty(),
        check('username', 'Имя введёно не верно').notEmpty(),
        check('password', 'Пароль введён не верно. Длина от 3 до 12').isLength({min: 3, max: 12}),
        check('age', 'Введите цифрами').isNumeric()

    ],controller.registration);

router.post('/user/login',
    controller.login);


module.exports = router;