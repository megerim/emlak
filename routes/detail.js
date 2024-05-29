var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('detail', { title: '#1232323 Detay' });
});

module.exports = router;
