const router = require('express').Router();
const controller = require('./controller');

router.get('/user/getall',
    controller.getAll);
router.get('/user/getone/:id',
    controller.getOne);
router.put('/user/update',
    controller.update);
router.delete('/user/delete/:id',
    controller.delete);
router.get('/user/getbyrole',
    controller.findByRole);
router.delete('/user/avatar',
    controller.deleteAvatar);
router.put('/user/avatar',
    controller.uploadAvatar);

module.exports = router;