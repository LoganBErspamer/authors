// 1. import all dependencies
const mongoose = require("mongoose");
const cors = require("cors")
const express=require("express")
const app = express()

// 2.config mongoose
require("./configs/mongoose.config")

// 2.config express
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 3. routes and logic
require("./routes/author.route")(app)

// 4.listening on port 
app.listen(8000, ()=>console.log("Listening on port 8000"))