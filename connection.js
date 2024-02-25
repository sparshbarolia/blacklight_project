require("dotenv").config();
const mysql = require('mysql2');

const UserDB = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: 'blacklight',
})

module.exports = UserDB;