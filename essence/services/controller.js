const service = require('./service');

module.exports.create = async(req, res)=>{
    try { const newService = await service.create(req.body, req.files.picture);
          res.json(newService);
    }catch (e) { res.status(500).json(e.message)}
}
module.exports.getAll = async(req, res)=>{
    try { const service = await service.getAll();
          res.json(service);
    }catch (e) { res.status(500).json(e.message)}
}

module.exports.getOne = async(req, res)=>{
    try { const service = await service.getOne(req.params.id);
          res.json(service);
    }catch (e) { res.status(500).json(e.message)}
}

module.exports.update = async(req, res)=>{
    try { const service = await service.update(req.body);
          res.json(service);
    }catch (e) { res.status(500).json(e.message)}
}

module.exports.delete = async(req, res)=>{
    try { await service.delete(req.params.id);
          res.json(service);
    }catch (e) { res.status(500).json(e.message)}
}

module.exports.findByCategory = async(req, res)=>{
    try { await service.findByCategory(req.query.category);
        res.json(service);
    }catch (e) { res.status(500).json(e.message)}
}