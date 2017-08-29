var express = require('express');
var router = express.Router();


router.get('*', function(req,res){ 
    console.log('fire')
    res.sendFile(__dirname, '../../client/build/index.html')
})


module.exports = router;