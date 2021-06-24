const router = require('express').Router();
const controller = require('./controller');

router.post('/user/role',
    controller.createRole);

router.get('/user/role',
    controller.getRoles);
router.delete('/user/role/:id',
    controller.deleteRole);

module.exports = router;