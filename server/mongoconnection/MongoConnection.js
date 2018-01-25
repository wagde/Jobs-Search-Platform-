var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/jobmongo"

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.createCollection("job1", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.createCollection("users", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.createCollection("skills", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var users = [{"id":1,"skill":"VLR"},
{"id":2,"skill":"Rooms Division"},
{"id":3,"skill":"FTTH"},
{"id":4,"skill":"Yields"},
{"id":5,"skill":"JavaSE"},
{"id":6,"skill":"Parts"},
{"id":7,"skill":"Event Production"},
{"id":8,"skill":"IAX"},
{"id":9,"skill":"Acoustic Guitar"},
{"id":10,"skill":"BTS"},
{"id":11,"skill":"Myofascial"},
{"id":12,"skill":"MMSC"},
{"id":13,"skill":"Tourism"},
{"id":14,"skill":"International Humanitarian Law"},
{"id":15,"skill":"JSP"},
{"id":16,"skill":"OSHA Instruction"},
{"id":17,"skill":"DS4000"},
{"id":18,"skill":"Distance Learning"},
{"id":19,"skill":"Start-up Consulting"},
{"id":20,"skill":"Research"},
{"id":21,"skill":"VPN"},
{"id":22,"skill":"Hypertension"},
{"id":23,"skill":"Product Launch"},
{"id":24,"skill":"Broadcast Journalism"},
{"id":25,"skill":"Ecotect"},
{"id":26,"skill":"Ksh"},
{"id":27,"skill":"IPTV"},
{"id":28,"skill":"Transportation"},
{"id":29,"skill":"Lyris ListManager"},
{"id":30,"skill":"Xbox"},
{"id":31,"skill":"Agility"},
{"id":32,"skill":"PPV"},
{"id":33,"skill":"iOS Development"},
{"id":34,"skill":"MC2"},
{"id":35,"skill":"KT"},
{"id":36,"skill":"UCC filings"},
{"id":37,"skill":"CNN Pathfire"},
{"id":38,"skill":"Umbrella Insurance"},
{"id":39,"skill":"ILOG"},
{"id":40,"skill":"Teaching Writing"},
{"id":41,"skill":"Revenue Cycle Management"},
{"id":42,"skill":"Client Relations"},
{"id":43,"skill":"MyBatis"},
{"id":44,"skill":"Mediation"},
{"id":45,"skill":"Special Effects Makeup"},
{"id":46,"skill":"Loans"},
{"id":47,"skill":"HR Metrics"},
{"id":48,"skill":"CAD"},
{"id":49,"skill":"Performance Appraisal"},
{"id":50,"skill":"VSEO"}]

    db.collection("users").insertMany(users, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});
