const monsgoose = require('mongoose');
const validator = require('validator');

const subscribeSchema = new monsgoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter your Email"],
        validate: [validator.isEmail, "Please Enter Valid Email"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

module.exports = monsgoose.model("Subscribe", subscribeSchema);