var express = require('express');
var jobDB = require('../models/jobDB');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/jobmongo"
var getlunglat = require('../latlongfinder/getlanlut');

router.get('/job', function (req, res, next) {

    jobDB.findjobs(function (err, job) {
        if (err) {
            res.json(err);
        }
        res.json(job)
    })
})
router.get('/jobs/:id', function (req, res, next) {
    var Id = req.params.id;
    var start = 0;
    var end = 10;
    for (var i = 0; i < Id; i++) {
        start = start + 10;
        end = end + 10;
    }
    jobDB.findjobs(function (err, job) {
        if (err) {
            res.json(err);
        }
        res.json(job.slice(start, end));
    });
});
router.post('/searchjobs', function (req, res, next) {
    var SearchResult = req.body.ser;
    var SearchBY = req.body.collection;
    jobDB.SearchJobs(SearchBY, SearchResult, function (err, job) {
        if (err) {
            res.json(err);
        }
        res.json(job)
    })
});

router.post('/addjob', function (req, res, next) {
    json = req.body;

    getlunglat(req.body.location, function (err, result) {
        json.latitude = result[0].latitude;
        json.longitude = result[0].longitude;
        jobDB.addJob(json, function (err, job) {
            if (err) {
                res.json(err);
            }
            res.json(true)
        })
    })

})

router.post('/deletejob', function (req, res, next) {
    json = req.body;
    jobDB.deleteJob(json, function (err, job) {
        if (err) {
            res.json(err);
        }
        res.json(true)
    })
})

router.post('/agent', function (req, res, next) {
    json = req.body;
    console.log(json)
    jobDB.agenJob(json, function (err, job) {
        if (err) {
            res.json(err);
        }
            console.log(job)
        res.json(job)   
    })
})







// router.post('/jobs', function(req, res, next) {
//     var job = {
//         'categoryId' : req.body.categoryId,
//         'image' : req.body.image,
//         'name' : req.body.name,
//         'description' : req.body.description,
//         'price' : req.body.price,
//     };

//     jobDB.addjob(job, function(err, data){
//         if(err){
//             res.json(err);
//         }

//         res.json({
//             'message' : 'Row added successfully!'
//         });
//     });
// });

// router.put('/jobs', function(req, res, next) {
//     var job = {
//         'categoryId' : req.body.categoryId,
//         'image' : req.body.image,
//         'name' : req.body.name,
//         'description' : req.body.description,
//         'price' : req.body.price,
//         'id' : req.body.id
//     };

//     jobDB.updatejob(job, function(err, data){
//         if(err){
//             res.json(err);
//         }

//         res.json({
//             'message' : 'Row updated successfully!'
//         });
//     });
// });

// router.delete('/jobs', function(req, res, next) {
//     var prodId = req.body.id;

//     jobDB.deletejob(prodId, function(err, data){
//         if(err){
//             res.json(err);
//         }

//         res.json({
//             'message' : 'Row deleted successfully!'
//         });
//     });
// });

module.exports = router;