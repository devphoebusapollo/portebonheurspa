const router = require('express').Router();
const subCtrl = require('../controllers/newsletter');

router.post('/subscribe', subCtrl.subscribe);

router.delete('/unsubscribe', subCtrl.unsubscribe);

module.exports = router;