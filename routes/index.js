var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});
router.get('/output', function(req, res) {
  res.render('agla',{
    name:req.query.name
  });
});

module.exports = router;
