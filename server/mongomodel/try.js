// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/jobmongo";

// // MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

//  MongoClient.connect(url, function(err, db) {
//    if (err) throw err;
//    db.createCollection("jobs2", function(err, res) {
//      if (err) throw err;
//      console.log("Collection created!");
//      db.close();
//    });
// });



// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = [{"jobname":"Database Administrator III","pub_date":"6/21/2017","pub_id":"agoggins0@telegraph.co.uk","description":"Restriction of Bladder Neck with Extraluminal Device, Percutaneous Endoscopic Approach","location":"Changpu","skills":[4,4],"apply_id":["wagde_11@hotmail.com"]},
// {"jobname":"Information Systems Manager","pub_date":"5/26/2017","pub_id":"ebumphries1@uiuc.edu","description":"Repair Right Occipital Bone, Percutaneous Endoscopic Approach","location":"Pinaring","skills":[4,4],"apply_id":[]},
// {"jobname":"Staff Accountant IV","pub_date":"8/26/2017","pub_id":"nmeade2@reference.com","description":"Dilation of Abdominal Aorta, Bifurcation, Percutaneous Endoscopic Approach","location":"Vito","skills":[4,4,4],"apply_id":[]},
// {"jobname":"Tax Accountant","pub_date":"10/12/2016","pub_id":"evilliers3@cyberchimps.com","description":"Supplement Right Innominate Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","location":"Kíti","skills":[4,4,4,4],"apply_id":[]},
// {"jobname":"Chemical Engineer","pub_date":"3/16/2017","pub_id":"dcuffe4@twitter.com","description":"Supplement Left External Iliac Artery with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","location":"Meiyao","skills":[4,4,4],"apply_id":[]},
// {"jobname":"Programmer Analyst III","pub_date":"5/3/2017","pub_id":"thackney5@hc360.com","description":"Excision of Right Kidney Pelvis, Open Approach","location":"Nanggorak","skills":[4,4],"apply_id":[]},
// {"jobname":"Biostatistician I","pub_date":"8/11/2017","pub_id":"kenston6@time.com","description":"Bypass Lower Esophagus to Ileum with Synthetic Substitute, Open Approach","location":"Wonokerso","skills":[4,4],"apply_id":[]},
// {"jobname":"Senior Quality Engineer","pub_date":"8/10/2017","pub_id":"gvandendael7@etsy.com","description":"Supplement Left Knee Bursa and Ligament with Nonautologous Tissue Substitute, Open Approach","location":"Norfolk","skills":[4,4,4,4],"apply_id":[]},
// {"jobname":"Accountant I","pub_date":"9/9/2017","pub_id":"pantonomoli8@nifty.com","description":"Replacement of Nasal Septum with Synthetic Substitute, Percutaneous Approach","location":"Pingsha","skills":[4],"apply_id":[]},
// {"jobname":"Office Assistant II","pub_date":"11/8/2016","pub_id":"mgreenshiels9@salon.com","description":"Reposition Left Tarsal Joint with Internal Fixation Device, Open Approach","location":"Umanday Centro","skills":[4,4,4],"apply_id":[]}]
//   db.collection("jobs1").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

// // var http = require('http');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
// var ObjectID = require("bson-objectid");
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   db.collection("jobs1").find({ _id: ObjectID("59c29c1ab1162c1c2605d69a") }).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// })

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   db.collection("users").find({ 'email': { $in: ["wagde.93@gmail.com"] } }, { "firstname": 1, "email": 1, "skills": 1, "location ": 1 }).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// });{"id":1,"firstname":"Bern","email":"bseeler0@comsenz.com","location ":"Indonesia","password":"CXq890zZvuP1","skills":[4,4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":2,"firstname":"Shelley","email":"sgoard1@tinypic.com","location ":"Russia","password":"7tSkzueCVy","skills":[4,4,4,4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":3,"firstname":"Gordon","email":"ghambridge2@cdbaby.com","location ":"Japan","password":"lA4ORVN","skills":[4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":4,"firstname":"Kala","email":"kmessenger3@elegantthemes.com","location ":"Indonesia","password":"sjTztCVBYrR","skills":[4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":5,"firstname":"Francisco","email":"flawes4@last.fm","location ":"Indonesia","password":"7re2HQdcppVe","skills":[4,4,4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":6,"firstname":"Waldemar","email":"wnunan5@slashdot.org","location ":"Indonesia","password":"QKIPfsl","skills":[4,4,4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":7,"firstname":"Melvin","email":"mbasinigazzi6@surveymonkey.com","location ":"Indonesia","password":"z3NNhwWDc","skills":[4,4,4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":8,"firstname":"Devland","email":"ddowson7@washingtonpost.com","location ":"Ukraine","password":"Epkh4mizvkUI","skills":[4],"agent":[4,4],"jobapp":[4,4]},
//{"id":9,"firstname":"Kerby","email":"kbrockhurst8@tripadvisor.com","location ":"Palau","password":"ePUouJC","skills":[4,4,4,4,4],"agent":[4,4],"jobapp":[4,4]},
//{"id":10,"firstname":"Germaine","email":"gleeburn9@weather.com","location ":"China","password":"BwHz6l","skills":[4],"agent":[4,4],"jobapp":[4,4]},
//{"id":11,"firstname":"wagde","email":"wagde@weather.com","location ":"China","password":"123","skills":[2],"agent":[1,4],"jobapp":[3,4]}


// db.jobs1.aggregate([
//   {
//     "$lookup": {
//       "from": "users",
//       "localField": "apply_id",
//       "foreignField": "email",
//       "as": "userapply"
//     }
//   },
//   { "$unwind": "$userapply" },
//   {
//     "$group": {
//       "_id": "$_id",
//       "userapply": { "$push": "$firstname" }
//     }
//   }
// ])


