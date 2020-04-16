var express = require("express");
var router = express.Router();
var menuCtrl = require("../controllers/menu");

router.get("/", menuCtrl.index);

module.exports = router;
