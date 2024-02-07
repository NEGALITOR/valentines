var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mochi' });
});

router.get('/yipee', (req, res) => {
  res.render('yipee');
});

module.exports = router;
