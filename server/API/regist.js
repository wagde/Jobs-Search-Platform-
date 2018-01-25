var express = require('express');
var registDb = require('../models/userDB.js')
var router = express.Router();
var getlunglat = require('../latlongfinder/getlanlut');

router.post('/RegistAuthentication', function (req, res, next) {
    mail = { email: req.body.email };

    registDb.CheckMail(mail, function (err, data) {
        if (!data) {
            res.json({ 'message': 'true' });
        }
        else {
            res.json({ 'message': 'false' });
        }
    });
});






router.post('/regist', function (req, res, next) {
    getlunglat(req.body.location, function (err, result) {
   
        var user = {
            'firstname': req.body.username,
            'email': req.body.email,
            'location ': req.body.location,
            'password': req.body.password,
            'skills': req.body.skills,
            'agent': [],
            "jobapp": [],
            "latitude": result[0].latitude,
            "longitude": result[0].longitude
        }

        registDb.AddUser(user, function (err, data) {
            if (err) {
                res.json({ 'message': 'false' });
            }
            res.json({ 'message': 'the registering successes' })
        });
    });
});
module.exports = router;
