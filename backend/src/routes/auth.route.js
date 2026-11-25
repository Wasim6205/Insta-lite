const express = require("express")
const { registerController, loginController } = require("../controllers/auth.controller")

const router = express.Router()

// router.post("/me")

router.post("/register",registerController)
router.post("/login",loginController)
// router.post("/logout")


// router.post("/reset-password")
// router.post("/update-password")

module.exports = router