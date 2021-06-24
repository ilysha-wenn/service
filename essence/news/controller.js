const service = require('./service');

module.exports.create = async(req, res) => {
    try { const news = await service.create(req.body, req.files.picture);
          res.json(news);
    }catch (e) { res.status(500).json(e.message)};
}
module.exports.getAll = async(req, res) => {
    try { const news = await service.getAll();
          res.json(news);
    }catch (e) { res.status(500).json(e.message)};
}
module.exports.getOne = async(req, res) => {
    try { const news = await service.getOne(req.params.id);
          res.json(news);
    }catch (e) { res.status(500).json(e.message)};
}
module.exports.update = async(req, res) => {
    try { const news = await service.update(req.body);
          res.json(news);
    }catch (e) { res.status(500).json(e.message)};
}
module.exports.delete = async(req, res) => {
    try { await service.delete(req.params.id);
          res.json('Новость была удалена');
    }catch (e) { res.status(500).json(e.message)};
}
module.exports.getByCategory = async(req, res) => {
    try{ const news = await service.getByCategory(req.query.category);
         res.json(news);
    }catch (e) { res.status(500).json(e.message)};
}

module.exports.find = async(req, res) => {
    try{ const news = await service.find(req.query.text);
        res.json(news);
    }catch (e) { res.status(500).json(e.message)};
}
