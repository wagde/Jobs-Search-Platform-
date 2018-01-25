const mysql = require('mysql');

var mysqlConnectionConstructor = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'7412',
    database: 'JobSite',
});
module.exports = mysqlConnectionConstructor;