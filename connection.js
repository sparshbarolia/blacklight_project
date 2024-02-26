require("dotenv").config();
const mysql = require('mysql2');

const UserDB = mysql.createPool({
    connectionLimit: 10,
    host: process.env.SQLHOST,
    user: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: 'blacklight',
})

module.exports = UserDB;