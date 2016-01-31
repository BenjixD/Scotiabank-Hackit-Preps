var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Home' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.button);
  res.render('Home', { title: 'Home' });
});


module.exports = router;
