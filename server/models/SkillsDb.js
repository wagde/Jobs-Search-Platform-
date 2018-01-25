function SkillMDL() {
    var myskills;
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/jobmongo";
    this.findskils = function (skills, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("skills").find({ id: { $in: skills } }).toArray(callback);
        });
    }
    this.findallskills = function (callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("skills").find({}).toArray(callback);
        });
    }


}
module.exports = new SkillMDL();