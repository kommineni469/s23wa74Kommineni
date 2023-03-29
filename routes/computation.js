var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var x = req.query.x;
  var r = Math.random()*10
  if(x != undefined){
    r = x
  }
  var result = Math.ceil(r)
  
  res.send(`Math.ceil applied to ${r} is ${result}`);
});

module.exports = router;
