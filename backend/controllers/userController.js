const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const { request } = require('express');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');



//Registration 
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,email,password,
        avater:{
            public_id: 'public-id',
            url:'url'
        }
    });
    // sendToken(user, 201, res);
    res.status(201).json({
        success: true,
        user
    })
})

// Login
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body;
    // checking if user given password and email both
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400));
    }
    const user = await User.findOne({ email }).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password",401));
    }
    //sendToken(user, 200, res);
    res.status(200).json({
        success: true,
        user
    })
})

//Logout
exports.logout = catchAsyncError(async(req,res,next)=>{
    res.cookie("token", null,{
        expires : new Date(),
        httpOnly :true
    });
    res.status(200).json({
        success: true,
        message:"Logged out successfully",
    });
});