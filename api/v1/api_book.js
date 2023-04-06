const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const path = require("path");

router.get("/book/:St_ID", function (req, res) {
  const St_ID = req.sanitize(req.params.St_ID);
  let sql = `SELECT * FROM v_book_list WHERE v_book_list.St_ID =  ?`;
  db.query(sql, [St_ID], function (err, rs) {
    if (err) throw err;

    if (rs.length > 0) {
      res.json(rs);
    } else {
      res.json({
        message: "Book Not Found...."
      });
    }
  });
});

module.exports = router;
