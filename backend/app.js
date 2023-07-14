const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


dotenv.config({path:"backend/config/config.env"});

app.use(express.json());
//app.use(cookieParser)

// Import Route
const user = require("./routes/userRoutes");

// Config api
app.use("/api/v1/user",user);


module.exports = app;