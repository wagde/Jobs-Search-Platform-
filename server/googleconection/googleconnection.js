var NodeGeocoder = require('node-geocoder');
var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyAglnzFHZqT89vG8DFUiLodvQ5PvUM7lOY',
    formatter: null
};
var geocoder = NodeGeocoder(options);

// function gitlanglut(place, callback) {

//     geocoder.geocode(place, callback)
// }


module.exports = geocoder;

