var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/algo', function(req, res, next) {
  res.send('<h1> /VotacionesLAL-2018/#!/Login </h1>');
});



router.get('/usuarios', function(req, res, next) {
  res.send('<h1>Usuarios: Migue, Rafa, Donatelo...</h1>');
});

module.exports = router;