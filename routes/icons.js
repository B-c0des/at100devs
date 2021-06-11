const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const iconsController = require("../controllers/icons");
const { ensureAuth, ensureGuest } = require("../middleware/auth");













router.get("/icons", iconsController.getIcons);



module.exports = router;
