var express = require('express');
var router = express.Router();
var indexController =  require('../controller/index.controller')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/send_push', (req, res)=>{
//   console.log("heloo")
//   res.status(200).json({message:"Success !!",response:req.body});
// });

module.exports = router;
