var express = require('express');
var userDb = require('../models/userDB');
var router = express.Router();

router.post('/users', function (req, res, next) {
    var user = {
        'firstname': req.body.user,
        'password': req.body.pass
    };
    userDb.matchUser(user, function (err, result) {
        if (result) {
            
            res.json({ 'message': 'true', result: result });
        }
        else {
            res.json({ 'message': 'false' });
        }
    });

});



module.exports = router;
