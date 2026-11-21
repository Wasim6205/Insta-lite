const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
    },
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:[true, "Duplicate email error"]
    },
    password:{
        type:String,
        minlength: [6, "minimum 6 characters are required"]
    },
    mobile:{
        type:String,
        minlength:10,
        maxlength:10
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "posts"
        }
    ]
},{timestamps:true})

userSchema.pre('save', function() {
    if(!this.isModified("password")){
        return
    }
    this.password = bcrypt.hashSync(this.password,12)
})

const UserModel = mongoose.model('users',userSchema)
module.exports = UserModel