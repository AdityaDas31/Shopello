const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const { request } = require('express');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const userOTP = require('../models/userOtp');
const cloudinary = require("cloudinary");
const Subscribe = require("../models/subscribeModel");
const fs = require('fs');



//Registration 
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
    });
    const { name, email, password } = req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        }
    });

    const htmlPath = 'backend/mailTemplate/welcome.html';

    let message = fs.readFileSync(htmlPath, 'utf8');

    message = message.replace(/\$\(NAME\)/g, user.name);

//     const message = `Hello ${user.name},
    
// A big welcome to Shopello! Get ready to discover amazing products, great deals, and a seamless online shopping experience. Happy browsing!

// Best wishes,
// The Team Shopello`;

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
    // const message = `Hello ${user.name},

    // We're delighted to see you again! Your shopping journey continues, and we're here to make it exceptional. Let's dive in and explore what's new.

    // Happy shopping!

    // The Team Shopello`

    const htmlPath = 'backend/mailTemplate/welcome.html';

    let message = fs.readFileSync(htmlPath, 'utf8');

    message = message.replace(/\$\(NAME\)/g, user.name);
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

//send otp
exports.userOtpSend = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return next(new ErrorHandler('please enter your valid email', 400));
    };

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            // const OTP = Math.floor(100000 + Math.random() * 900000);
            const OTP = crypto. randomInt(100000, 1000000);
            const existEmail = await userOTP.findOne({ email: email });

            if (existEmail) {
                const updateOtp = await userOTP.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP,
                },
                    {
                        new: true,
                    }
                );
                await updateOtp.save();

                const htmlPath = 'backend/otp.html';
                let message = fs.readFileSync(htmlPath, 'utf8');

                message = message.replace(/\$\(OTP\)/g, OTP);
                //                 const message = `Hello ${user.name},

                // This is your OTP:- ${OTP}

                // Happy shopping,
                // The Team Shopello
                //                 `;
                try {
                    await sendEmail({
                        email: user.email,
                        to: user.name,
                        subject: `Shopello - Login OTP :- ${OTP} `,
                        message,
                    });
                    res.status(200).json({
                        success: true,
                        message: "Email sent Successfully",
                    });
                } catch (error) {
                    return next(new ErrorHandler(error.message, 500));
                };
            } else {
                const seveOtpData = new userOTP({
                    email,
                    otp: OTP,
                });
                await seveOtpData.save();
            };
            const htmlPath = 'backend/mailTemplate/otp.html';
            let message = fs.readFileSync(htmlPath, 'utf8');

            message = message.replace(/\$\(OTP\)/g, OTP);
            //             const message = `Hello ${user.name},

            // This is your OTP:- ${OTP}

            // Happy shopping,
            // The Team Shopello
            //                 `;
            try {
                await sendEmail({
                    email: user.email,
                    to: user.name,
                    subject: `Shopello - Login OTP `,
                    message,
                });
                res.status(200).json({
                    success: true,
                    message: "Email sent Successfully",
                });
            } catch (error) {
                return next(new ErrorHandler(error.message, 500));
            };
        } else {
            return next(new ErrorHandler('this user not exist', 200));
        }
    } catch (error) {
        return next(new ErrorHandler('Invalid Details', 400));
    }
})

//login with otp

exports.userOtpLogin = catchAsyncError(async (req, res, next) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return next(new ErrorHandler("Please Enter Email and OTP", 400));
    };

    try {
        const otpverification = await userOTP.findOne({ email: email });
        if (otpverification.otp === otp) {
            const user = await User.findOne({ email: email });
            //             const message = `Hello ${user.name},

            // We're delighted to see you again! Your shopping journey continues, and we're here to make it exceptional. Let's dive in and explore what's new.

            // Happy shopping!

            // The Team Shopello`;

            const htmlPath = 'backend/mailTemplate/welcome.html';

            let message = fs.readFileSync(htmlPath, 'utf8');

            message = message.replace(/\$\(NAME\)/g, user.name);

            const deleteOtp = await userOTP.findOneAndDelete({ otp });
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
        } else {
            return next(new ErrorHandler("Invalid Email or OTP", 401));
        }
    } catch (error) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
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

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old Password is incorrect", 400));
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler('New passwords do not match', 400))
    }
    user.password = req.body.newPassword;
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

// Subscribe

exports.subscribe = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    const subscribe = await Subscribe.create({
        email,
    })

    const message = `Dear Subscriber,
    
We are thrilled to introduce a fantastic opportunity to enhance your shopping experience at Shoppilo. We are excited to announce our brand new subscription service that will keep you informed, engaged, and rewarded.!

Best wishes,
The Team Shopello`;


    try {
        await sendEmail({
            email: subscribe.email,
            subject: "Welcome to Shopello - Your Ultimate Shopping Destination! 🛒",
            message,
        })
        res.status(200).json({
            success: true,
            message: "Successfully Subscribe",
        });

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}) 