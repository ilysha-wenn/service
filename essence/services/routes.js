const router = require('express').Router();
const controller = require('./controller')
router.get('/service/getall',
    controller.getAll
);

router.get('/service/getone/:id',
    controller.getOne
);

router.post('/service/create',
    controller.create
);
router.put('/service/change',
    controller.update
);

router.delete('/service/delete/:id',
    controller.delete
);
router.get('/service/find',
    controller.findByCategory
);

module.exports = router;