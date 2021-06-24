const router = require('express').Router();
const controller = require('./controller');

router.post('/categories/create', controller.create);
router.put('/categories/change', controller.change);
router.get('/categories', controller.getAll);
router.delete('/categories/delete/:id', controller.delete);


module.exports = router;