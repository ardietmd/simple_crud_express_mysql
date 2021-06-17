const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'crud_express',
    password: ''
});

module.exports = pool.promise();
