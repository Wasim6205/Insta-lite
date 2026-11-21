const express = require("express")
const { registerController } = require("../controllers/auth.controller")

const router = express.Router()

// router.post("/me")

router.post("/register",registerController)
// router.post("/login")
// router.post("/logout")


// router.post("/reset-password")
// router.post("/update-password")

module.exports = router