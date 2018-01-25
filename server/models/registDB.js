function RegistMDL() {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/jobmongo";
    this.AddUser = function (Regist, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("users").insertOne(Regist, callback)
        });
    }
}
module.exports = new RegistMDL();