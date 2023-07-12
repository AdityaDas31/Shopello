const mongoose = require("mongoose");
const dotenv = require('dotenv');


mongoose.set('strictQuery',false);

dotenv.config({path:"backend/config/config.env"});

const connectDatabase =()=>{
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`Connected to database ${data.connection.host}`);
    });
};

module.exports = connectDatabase;