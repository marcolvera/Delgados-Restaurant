var express = require("express");
var router = express.Router();
var contactCtrl = require("../controllers/contact");

router.get("/", contactCtrl.index);

module.exports = router;
