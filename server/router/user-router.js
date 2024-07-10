const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/user-controller");

router.route("/all").get(authcontrollers.getAllUsers);
router.route("/register").post(authcontrollers.postRegister);
router.route("/:login").get(authcontrollers.getUserByUsername);
module.exports = router;
