var express = require('express');
var router = express.Router();
var x;

/* GET home page. */
router.get('/', function(req, res, next) {
  x = Math.random()
  res.write('Math.cbrt applied to' + x + "is" + Math.cbrt(x))
});

module.exports = router;
