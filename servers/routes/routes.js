const router = require('express').Router();
const middlewares = require('../middlewares/middlewares');
router.route('/balance').get(middlewares.getBalance);
router.route('/download-balance').get(middlewares.downloadBalance);
module.exports = router;