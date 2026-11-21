const express = require("express")
const cookieParser = require("cookie-parser")

const authRoutes = require("./routes/auth.route")
const postRoutes = require("./routes/post.route")
const commentRoutes = require("./routes/comments.route")
const userRoutes = require("./routes/user.route")
const errorMiddleware = require("./middleware/error.middlewars")


const app = express()

app.use(cookieParser())

app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/post",postRoutes)
app.use("/api/comment",commentRoutes)


app.use(errorMiddleware)

module.exports = app