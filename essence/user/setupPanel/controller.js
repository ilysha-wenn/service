const service = require('./service')

module.exports.getAll = async (req, res) => {
    try { const users = await service.getAll();
          res.json(users);
    }catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports.getOne = async (req, res) => {
    try { const user = await service.getOne(req.params.id);
          res.json(user);
    }catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports.update = async (req, res) => {
    try { const updated = await service.update(req.body);
          res.json(updated);
    }catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports.delete = async (req, res) => {
    try { await service.delete(req.params.id);
          res.json('Пользователь был успешно удалён.');
    }catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports.findByRole = async(req, res) => {
    try { const users = await service.findByRole(req.query.role);
          res.json(users);
    }catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports.deleteAvatar = async (req, res) => {
    try { const user = await service.deleteAvatar(req.body);
          res.json(user);
    }catch (e) {
        res.status(500).json(e.message);
    }
}
module.exports.uploadAvatar = async (req, res) => {
    try { const users = await service.uploadAvatar(req.body, req.files.picture);
          res.json(users);
    }catch (e) {
        res.status(500).json(e.message);
    }
}