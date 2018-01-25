var express = require('express');
var router = express.Router();
var getlunglat = require('../latlongfinder/getlanlut');

router.post('/getlunglat', function (req, res, next) {

    getlunglat(req.body.place, function (err, result) {
            
            res.json([result[0].latitude, result[0].longitude])
        });

});


module.exports = router;