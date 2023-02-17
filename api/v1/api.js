const express = require("express")
const router = express.Router()

const carouselAPI = require("./api_carousel")
// const bookAPI = require("./api_book")

router.use(carouselAPI)
// router.use(bookAPI)

module.exports = router