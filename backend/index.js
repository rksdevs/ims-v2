const express = require("express");
const connectToDb = require("./config/db");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
require('dotenv').config();


const authRoute = require("./routes/authRoute");
const brandRoute = require("./routes/brandRoute");
const categoryRoute = require("./routes/categoryRoute");
const attributeRoute = require("./routes/attributeRoute");


const app = express();
const PORT = 3000;

//middlewares
app.use(express.json()); // parses json payload and makes them available in the req.body
app.use(express.static("public")); //serves static files from public directory
app.use(cookieParser());

//mongodb connection integration check
mongoose.connection.on("connected", ()=>{
    console.log("DB is connected!");
})

mongoose.connection.on("disconnected", ()=>{
    console.log("DB is disconnected!");
})
//mongodb connection integration check

//routes - home page, when we send a get request to the home page, it triggers the callback function which sends the data inside the code
app.get("/", (req,res)=>{
    res.send("Hello, this is home!")
})

app.use("/api/auth", authRoute);
app.use("/api/brands", brandRoute);
app.use("/api/category", categoryRoute);
app.use("/api/attribute", attributeRoute);

//server
app.listen(PORT, ()=>{
    connectToDb()
    console.log("Server is running on port: " + PORT)
})

