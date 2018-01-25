var express = require('express');
var userDb = require('../models/userDB.js');
var jobDb = require('../models/jobDB.js');
var getlunglat = require('../latlongfinder/getlanlut');

var router = express.Router();

router.post('/applyjob', function (req, res, next) {
    var user = req.body.newuser;

    var email = req.body.newuser.email;
    var id = req.body.job_id;
    var idAppliers = req.body.idAppliers;
    userDb.AddJobToUser(email, user, function (err, result) {
        if (err) {
            res.json({ 'message': 'false' });
        }
        res.json({ 'message': 'the apply successes' })

        if (idAppliers || idAppliers == []) {
            console.log(idAppliers)
            jobDb.appliersAdd(id, idAppliers, function (err, result) {

            });
        }

    });

});

router.post('/myjob', function (req, res, next) {
    id = req.body.email;
    jobDb.mypubjob(id, function (err, result) {
        if (err) {
            res.json({ 'message': 'false' });
        }
  
        res.json(result)
    });

});
router.post('/getapplier', function (req, res, next) {
    users = req.body.users;
    console.log(users)
    userDb.getApplier(users, function (err, result) {
        if (err) {
            res.json({ 'message': 'false' });
        }
         res.json(result)
    
    })
})


module.exports = router;