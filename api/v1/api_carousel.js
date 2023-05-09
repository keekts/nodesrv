const express = require("express");
const router = express.Router();
const db = require("../../config/db");

router.get("/carousel", function (req, res) {
  let sql = "SELECT carousel_img FROM tbl_carousel   LIMIT 5";
  db.query(sql, function (err, rs) {
    if (err) throw err;
    res.json(rs);
  });
});

module.exports = router;
