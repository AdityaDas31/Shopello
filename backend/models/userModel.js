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
    avatar: {
        public_id: {
            type: String,
            required: true,
            default: null
        },
        url: {
            type: String,
            required: true,
            default: null
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


userSchema.methods.getResetPasswordToken = async function () {

    // generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // generate hash token and add to db
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}



module.exports = monsgoose.model("User", userSchema)