const mongoose = require("mongoose")

const connectDb = async () => {
    await mongoose.connect('mongodb://0.0.0.0/insta-lite')
    console.log('mongodb connected');
    
}

module.exports = connectDb