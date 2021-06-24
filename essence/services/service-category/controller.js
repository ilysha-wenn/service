const Category = require('./model.service.category');

module.exports.create = async(req, res) => {
    try{
        const {category} = req.body;
        const newCategory = new Category({category : category});
        await newCategory.save();
        res.json('Успешно создана новая категория сервиса');
    }catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports.change = async(req, res) => {
    try{ const category = req.body;
        const categories = await Category.findByIdAndUpdate(category._id, category, {new: true});
        res.json(categories);
    }catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports.delete = async(req, res) => {
    try { await Category.findByIdAndDelete(req.params.id);
        res.json('Категория сервиса была успешно удалена');
    }catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports.getAll = async(req, res) => {
    try{ const category = await Category.find();
        res.json(category);
    }catch (e) {
        res.status(500).json(e);
    }
}