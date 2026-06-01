const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const feedbackRoutes = require("./routes/feedbackRoutes")

const notFound = require("./middleware/notFoundMiddleware")
const errorHandler = require("./middleware/errorMiddleware")

dotenv.config()

connectDB()

const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.use("/api/auth", authRoutes)

app.use("/api/feedbacks", feedbackRoutes)


app.get("/", (req, res) => {
    res.send("Feedback Tracker API Running")
})


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 1000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})