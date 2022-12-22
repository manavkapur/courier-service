const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const path = require("path");

const app = express();

const Database = require('./Database/db')
Database()

const userRoute = require("./routes/userRoute");


const errorHandler = require("./middleWare/errorMiddleware");


// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/users", userRoute);


// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
  });

  
// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})










