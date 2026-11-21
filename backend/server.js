require("dotenv").config()
const app = require("./src/app")
const connectDb = require("./src/config/db")

const port = process.env.PORT || 5000

connectDb()

app.listen(port,() => {
    console.log(`server running on port ${port}`)
})