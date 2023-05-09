const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const bcrypt = require("bcryptjs");
const moment = require("moment");
// const { v4: uuidv4 } = require("uuid")
const jwt = require("../../jwt");

router.post("/access-data", jwt.verify, function (req, res) {
  res.json({
    St_ID: req.St_ID,
    // email: req.email
  });
});

router.post("/login", function (req, res) {
  const St_ID = req.sanitize(req.body.St_ID);
  const St_Password = req.sanitize(req.body.St_Password);
  let sql = "SELECT * FROM student_tb WHERE St_ID = ? LIMIT 1";
  db.query(sql, [St_ID], function (err, rs) {
    if (err) throw err;

    if (rs.length > 0) {
      const isSuccess = bcrypt.compareSync(St_Password, rs[0].St_Password);
      if (isSuccess == true) {
        const payload = {
          St_ID: St_ID,
          // created_date: moment().format("YYYY-MM-DD H:m:s")
        };

        const token = jwt.sign(payload);

        res.json({
          status: "success",
          message: "Login success",
          token: token,
          St_ID: rs[0].St_ID,
          St_Name_Lao: rs[0].St_Name_Lao,
          St_Surname_Lao: rs[0].St_Surname_Lao,
          Cou_ID: rs[0].Cou_ID,
        });
      } else {
        res.json({
          status: "error",
          message: "ID or password invalid",
        });
      }
    } else {
      res.json({
        status: "error",
        message: "Email or password invalid",
      });
    }
  });
});

// router.post("/user/update"){ }

router.post("/update", function (req, res) {
  // const uuid = uuidv4();
  const St_ID = req.sanitize(req.body.St_ID);
  // const St_Password = req.sanitize(req.body.St_Password);
  const name = req.sanitize(req.body.name);
  const surname = req.sanitize(req.body.surname);
  const St_Password = bcrypt.hashSync(req.body.St_Password);
  const id_cla = req.sanitize(req.body.id_cla);
  const id_major = req.sanitize(req.body.id_major);
  const id_year = req.sanitize(req.body.id_year);
  const id_book = req.sanitize(req.body.id_book);
  const created_date = moment().format("YYYY-MM-DD H:m:s");

  let sql = "UPDATE student_tb SET ? ";
  let value = {
    St_Password: St_Password,
  };

  // if (myFileName != "") {
  //     value = { ...value, ...{ "image_url": myFileName } }
  // }
  db.query(sql, [value, St_ID], function (err, rs) {
    if (err) throw err;
    res.json({
      status: "success",
      message: "Update book success",
    });
  });
});
module.exports = router;
