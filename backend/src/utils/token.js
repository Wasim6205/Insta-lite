const jwt = require("jsonwebtoken")

const generateToken = (payload,time) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn:time
    })
}

module.exports = generateToken