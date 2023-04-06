require("dotenv").config();

const { HOST, USER, PASSWORD, PORT, DATABASE } = process.env;

module.exports = { HOST, USER, PASSWORD, PORT, DATABASE };
