const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    body:{
        type:String,
        required: true
    },
    post_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "posts"
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

const CommentModel = mongoose.model('comments',commentSchema)
module.exports = CommentModel