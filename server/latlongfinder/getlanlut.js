var geocoder = require('../googleconection/googleconnection');
function gitlanglut(place, callback) {

    geocoder.geocode(place, callback)
}

module.exports = gitlanglut;