const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const  errorMiddleware = require("./middleware/error");
const cors = require('cors')



dotenv.config({path:"backend/config/config.env"});

// let corsAllow = {
//     origin: "http://localhost:3000",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// };

// app.use(cors(corsAllow))
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());




// Import Route
const user = require("./routes/userRoutes");
const product = require("./routes/productRoutes");
const payment = require("./routes/paymentRoutes");
const order = require("./routes/orderRoute");
const seller = require("./routes/sellerRoute");

// Config api
app.use("/api/v1/user",user);
app.use("/api/v1/product",product);
app.use("/api/v1",payment);
app.use("/api/v1", order);
app.use('/api/v1/seller',seller)



// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;