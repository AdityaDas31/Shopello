const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const { request } = require('express');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');



//Registration 
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name, email, password,
        avater: {
            public_id: 'public-id',
            url: 'url'
        }
    });

    const message = `Hello ${user.name},
    
A big welcome to Shopello! Get ready to discover amazing products, great deals, and a seamless online shopping experience. Happy browsing!

Best wishes,
The Team Shopello`;

    try {
        await sendEmail({
            email: user.email,
            subject: "Welcome to Shopello - Your Ultimate Shopping Destination! 🛒",
            message,
        })
        sendToken(user, 201, res);

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
})

// Login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    // checking if user given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    const message = `Hello ${user.name},
    
We're delighted to see you again! Your shopping journey continues, and we're here to make it exceptional. Let's dive in and explore what's new.

Happy shopping!
    
The Team Shopello`
    try {
        await sendEmail({
            email: user.email,
            to: user.name,
            subject: "Welcome back to Shopello! 👏",
            message,
        })
        sendToken(user, 200, res);

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }



})

//Logout
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(),
        httpOnly: true
    });
    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
});

// User Profile 
exports.getUserProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

// Update Password
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldpassword);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old Password is incorrect", 400));
    }
    if (req.body.newpassword !== req.body.confirmPassword) {
        return next(new ErrorHandler('New passwords do not match', 400))
    }
    user.password = req.body.newpassword;
    await user.save();
    const message = `Hello ${user.name},
    
Your password is now updated. Keep it safe and secure. If you have any questions or need further assistance, feel free to reach out to us.

Best regards,
    
The Team Shopello`
    try {
        await sendEmail({
            email: user.email,
            subject: "Password Update Successful! 🔑",
            message,
        })
        sendToken(user, 200, res);

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
    //sendToken(user, 200, res);
});