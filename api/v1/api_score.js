const express = require("express");
const router = express.Router();
const db = require("../../config/db");

router.get("/score/:St_ID", function (req, res) {
  const St_ID = req.sanitize(req.params.St_ID);
  let sql = `SELECT
  student_tb.St_Gender,
  student_tb.St_Name_Lao,
  student_tb.St_Surname_Lao,
  subject_tb.Sub_Name_Lao,
  score_tb.Sco_Grade,
  score_tb.Sco_Grade_Old 
FROM
  score_tb
  INNER JOIN student_tb ON score_tb.St_ID = student_tb.St_ID
  INNER JOIN subject_tb ON score_tb.Sub_ID = subject_tb.Sub_ID 
WHERE
  student_tb.St_ID = ?`;
  db.query(sql, [St_ID], function (err, rs) {
    if (err) throw err;

    if (rs.length > 0) {
      res.json(rs);
    } else {
      res.json({
        message: "Book Not Found....",
      });
    }
  });
});

module.exports = router;
