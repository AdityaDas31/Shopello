const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const  errorMiddleware = require("./middleware/error");



dotenv.config({path:"backend/config/config.env"});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());



// Import Route
const user = require("./routes/userRoutes");
const product = require("./routes/productRoutes");
const payment = require("./routes/paymentRoutes");

// Config api
app.use("/api/v1/user",user);
app.use("/api/v1/product",product);
app.use("/api/v1/payment",payment);




// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;