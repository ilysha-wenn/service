const User = require('./model');
const Role = require('./role/role.model');
const bcrypt = require('bcrypt');
const fileService = require('../../serviceFile');

module.exports.registration = async(data, picture) =>{
    const {email, username, password, age} = data;
    const fileName = fileService.saveFile(picture);

    const candidate = await User.findOne({email: email});
    if(candidate) throw new Error('Пользователь с таким почтовым ящиком уже зарегистрирован');
    // Hash Pass | salt 5
    const hashPassword = bcrypt.hashSync(password, 5);
    // Find the role and add
    const userRole = await Role.findOne({role: "CLIENT"});
    if(!userRole) throw new Error('Роль не существует');

    const user = await User.create({
        email: email,
        username: username,
        password: hashPassword,
        role: userRole.role,
        age: age,
        picture: fileName
    })
    return user;
}

module.exports.login = async(data) =>{
    const {email, password} = data;
    const account = await User.findOne({email: email});
    if(!account) throw new Error('Не существует пользователя с данным почтовым ящиком');
    const checkPassword = bcrypt.compareSync(password, account.password);
    if(!checkPassword) throw new Error('Не верный пароль');
    return account;
}