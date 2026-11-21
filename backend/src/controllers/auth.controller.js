const UserModel = require("../models/user.model")
const ApiError = require("../utils/ApiError")
const asyncHandler = require("../utils/asynHandler")
const generateToken = require("../utils/token")

const registerController = asyncHandler(async (req,res) => {
        let {fullName, username, email, password, mobile} = req.body

        if(!username || !email) throw new ApiError('All fields are required', 400)

        let isExists = await UserModel.findOne({email})

        if(isExists) throw new ApiError("User already exists", 409)

        let user = await UserModel.create({
            fullName,
            username,
            email,
            password,
            mobile,
        })

        let accessToken = generateToken({id: user._id}, "30min")
        let refreshToken = generateToken({id: user._id}, "24h")

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge : 30 * 60 * 1000
        })

        // req.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     maxAge : 24 * 60 * 60 * 1000
        // })

        user.refreshToken = refreshToken
        await user.save()

        return res.status(201).json({
            succuss:true,
            message:"User registered successfully",
            data:user
        })
})

module.exports = {
    registerController
}