var express = require('express');
var router = express.Router();
let {index, handlePost} = require('../controllers/indexcontroller')


/* GET home page. */
router.get('/', index);


router.post('/', handlePost );

module.exports = router;
