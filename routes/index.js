var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vue.js Sandbox' });
});

router.get('/tutorial/:view', function(req, res) {
  res.render('tutorial/' + req.params.view, { title: req.params.view + ' | Vue.js Tutorial' });
});


module.exports = router;
