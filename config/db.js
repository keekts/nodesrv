const mysql = require("mysql2");

const { HOST, USER, PASSWORD, PORT, DATABASE } = require("./globalKey.js");
const connection = mysql.createPool({
  connectionLimit: 10000,
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: PORT,
  database: DATABASE,
});

module.exports = connection;
