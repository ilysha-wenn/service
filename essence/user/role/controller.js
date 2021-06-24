const userRole = require('./role.model');

module.exports.createRole = async(req, res) => {
    try{
        const {role} = req.body;
        const newRole = new userRole({role : role});
        await newRole.save();
        res.json('Успешно создана новая роль');
    }catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports.getRoles = async(req, res) => {
    try{
        const roles = await userRole.find();
        res.json(roles);
    }catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports.deleteRole = async(req, res) => {
    try {
        await userRole.findByIdAndDelete(req.params.id);
        res.json('Удалён');
    }catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}
