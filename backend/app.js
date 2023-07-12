const express = require('express');
const app = express();
const dotenv = require('dotenv');


dotenv.config({path:"backend/config/config.env"});

app.use(express.json);

// Import Route
const user = require("./routes/userRoutes");

// Config api
app.use("/api/v1",user);


module.exports = app;