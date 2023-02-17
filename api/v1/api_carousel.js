const express = require("express")
const router = express.Router()
const db = require("../../db")
const moment = require("moment")
const {v4: uuidv4} = require("uuid")
const multer = require("multer")
const path = require("path")

router.get("/carousel", function(req, res) {
    let sql= "SELECT carousel_img FROM tbl_carousel   LIMIT 5"
    db.query(sql, function(err, rs) {
        if(err) throw err;
        res.json(rs)
    })
})

module.exports = router;