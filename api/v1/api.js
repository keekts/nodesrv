const express = require("express");
const router = express.Router();

const loginAPI = require("./api_login");
const carouselAPI = require("./api_carousel");
const bookAPI = require("./api_book");

router.use(loginAPI);
router.use(carouselAPI);
router.use(bookAPI);

module.exports = router;
