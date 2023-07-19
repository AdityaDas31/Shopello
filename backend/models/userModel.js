const monsgoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new monsgoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your full Name"],
        maxlength: [30, 'Name cannot exceed 30 characters'],
        minlength: [4, 'Name should be atleast 4 character long']
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter your Email"],
        validate: [validator.isEmail, "Please Enter Valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please enter your Password"],
        minlength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avater: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

});


//password hashing
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// JWT token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
};

// compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
}




module.exports = monsgoose.model("User", userSchema)