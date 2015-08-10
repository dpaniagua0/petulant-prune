var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{ name: 'Dany' }, {name: 'Nacho'}]);
});

router.get('/find_user', function(req, res, next) {
  res.send('Find user');
});

module.exports = router;
