const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")

// dotenv config
dotenv.config()

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(morgan("dev"))

const PORT = process.env.PORT

// routes
app.get("/", (req, res) => {
    res.send("Hello Express Server")
})

app.listen(PORT, () => {
    console.log(`Server is started in ${process.env.NODE_MODE} at http://localhost:${process.env.PORT}`)
})
