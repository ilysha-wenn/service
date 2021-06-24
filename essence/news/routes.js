const router = require('express').Router();
const controller = require('./controller');

router.get('/news/getall', controller.getAll);
router.get('/news/getone/:id', controller.getOne);
router.post('/news/create', controller.create);
router.put('/news/update', controller.update);
router.delete('/news/delete/:id', controller.delete);
router.get('/news/category', controller.getByCategory);
router.get('/news/find', controller.find);

module.exports = router;