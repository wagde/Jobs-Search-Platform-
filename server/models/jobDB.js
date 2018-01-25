function jobMDL() {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/jobmongo";
    var ObjectID = require("bson-objectid");
    this.findjobs = function (callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection('jobs1').aggregate([
                {
                    "$lookup": {
                        "from": "skills",
                        "localField": "skills",
                        "foreignField": "id",
                        "as": "jobSkills"
                    }
                },
                { "$unwind": "$jobSkills" },
                {
                    "$group": {
                        "_id": "$_id",
                        "jobSkills": { "$push": "$jobSkills.skill" },
                        "jobname": { "$addToSet": "$jobname" },
                        "pub_date": { "$addToSet": "$pub_date" },
                        "location": { "$addToSet": "$location" },
                        "description": { "$addToSet": "$description" },
                        "apply_id": { "$addToSet": "$apply_id" },
                        "latitude": { "$addToSet": "$latitude" },
                        "longitude": { "$addToSet": "$longitude" }



                    }
                }
            ]).toArray(callback);
        });
    }

    this.SearchJobs = function (SearchBy, SearchResult, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var obj = {};
            obj[SearchBy] = { $regex: '.*' + SearchResult + '.*', $options: 'i' };
            //console.log(SearchBy);
            db.collection("jobs1").aggregate([
                { "$match": obj },
                {
                    "$lookup": {
                        "from": "skills",
                        "localField": "skills",
                        "foreignField": "id",
                        "as": "jobSkills"
                    }
                },
                { "$unwind": "$jobSkills" },
                {
                    "$group": {
                        "_id": "$_id",
                        "jobSkills": { "$push": "$jobSkills.skill" },
                        "jobname": { "$addToSet": "$jobname" },
                        "pub_date": { "$addToSet": "$pub_date" },
                        "location": { "$addToSet": "$location" },
                        "description": { "$addToSet": "$description" },
                        "apply_id": { "$addToSet": "$apply_id" }
                    }
                }
            ]).toArray(callback);

        });

    }


    this.mypubjob = function (id, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            console.log(id);
            db.collection("jobs1").aggregate([
                { "$match": { "pub_id": id } },
                {
                    "$lookup": {
                        "from": "skills",
                        "localField": "skills",
                        "foreignField": "id",
                        "as": "jobSkills"
                    }
                },
                { "$unwind": "$jobSkills" },
                {
                    "$group": {
                        "_id": "$_id",
                        "jobSkills": { "$push": "$jobSkills.skill" },
                        "jobname": { "$addToSet": "$jobname" },
                        "pub_date": { "$addToSet": "$pub_date" },
                        "location": { "$addToSet": "$location" },
                        "description": { "$addToSet": "$description" },
                        "apply_id": { "$addToSet": "$apply_id" }
                    }
                }
            ]).toArray(callback);

        })
    }

    this.addJob = function (json, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("jobs1").insertOne(json, callback)
        })
    }
    this.deleteJob = function (id, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("jobs1").deleteOne({ _id: ObjectID(id.id) }, callback)
        })
    }
    this.appliersAdd = function (id, applier, callback) {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("jobs1").updateOne({ _id: ObjectID(id) }, { $set: { "apply_id": applier } }, callback);
        });

    }
    this.agenJob = function (json, callback) {
        skills=json.skills;
        date=json.date;
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("jobs1").find({ "skills": { $in:skills}, "pub_date":date }, callback);
        });
    }

}
module.exports = new jobMDL();
