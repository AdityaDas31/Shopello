const monsgoose = require('mongoose');
const validator = require('validator');

const userOtpSchema = new monsgoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter your Email"],
        validate: [validator.isEmail, "Please Enter Valid Email"],
    },
    otp:{
        type : String,
        require: true,
    },
    // createdAt:{
    //     type: Date,
    //     default: Date.now,
    // },
},
{
    timestamps: true,
}
);


module.exports = monsgoose.model("userOTP", userOtpSchema);