var getlunglat = require('../latlongfinder/getlanlut');
var jobDB = require('../models/jobDB');
var allLunLat = [];
let date = require('date-and-time');

require(['date-and-time'], function (date) {
    console.log(date)
});


jobDB.findjobs(function (err, job) {
    if (err) {
        console.log(err);
    }
    var location = getLocation(job);
    for (x in location) {
        getlunglat(location[x], function (err, result) {
            allLunLat.push([result[0].latitude, result[0].longitude])
         
        });
    }
})

getAllJobLoca = function () {

}


getLocation = function (jobs) {
    var allLocations = [];
    for (x of jobs) {
        allLocations.push(x.location)
    }
    return allLocations
}



function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

// function deg2rad(deg) {
//     return deg * (Math.PI / 180)
// }
// setTimeout(function() {
//     module.exports = allLunLat;
//     console.log("asd")
// }, 2000);


console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
