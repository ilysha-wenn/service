const router = require('express').Router();
const controller = require('./controller');

router.post('/service/category/create',
    controller.create);
router.get('/service/category/getall',
    controller.getAll);
router.put('/service/category/change',
    controller.change);
router.delete('/service/category/delete/:id',
    controller.delete);

module.exports = router;