var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/jobmongo";
var UserDb = function () {

    this.matchUser = function (credentials, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("users").findOne(credentials, callback)

        })
    }

    this.CheckMail = function (credentials, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("users").findOne(credentials, callback)
        })
    }


    this.AddUser = function (credentials, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("users").insertOne(credentials, callback)
        })
    }
    this.AddJobToUser = function (id, newuser, callback) {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("users").updateOne({ "email": id }, { $set: { "firstname": newuser.firstname, "jobapp": newuser.jobapp, "location ": newuser["location "], "password": newuser.password, "skills": newuser.skills } }, callback);
        });
    }
    this.getApplier = function (json, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("users").find({ 'email': { $in:json } }, { "firstname": 1, "email": 1, "skills": 1, "location ": 1 }).toArray(callback)
        })
    }



    // this.UpdateUser = function (id, newuser, callback) {

    //     MongoClient.connect(url, function (err, db) {
    //         if (err) throw err;
    //         db.collection("users").updateOne({ "email": email }, { $set: { "jobapp": newuser.jobapp } }, callback);
    //     });
    // }
}
module.exports = new UserDb;
//updateOne({"id":50},{$set:{"jobname":"xasdsd"}})
