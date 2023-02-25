var express = require('express');
var router = express.Router();
var indexController =  require('../controller/index.controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/send_push', indexController.sendNotification);
module.exports = router;
