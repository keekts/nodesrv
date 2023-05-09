const express = require("express");
const router = express.Router();

const loginAPI = require("./api_login");
const carouselAPI = require("./api_carousel");
const bookAPI = require("./api_book");
const ScoreAPI = require("./api_score");

router.use(loginAPI);
router.use(carouselAPI);
router.use(bookAPI);
router.use(ScoreAPI);

module.exports = router;
