const mysql = require("mysql2")
const connection = mysql.createPool({
    connectionLimit: 10000,
    host:"10.10.10.6",
    user:"admin",
    password: "12345678",
    port: 3306,
    database:"bi_app"
})

module.exports = connection