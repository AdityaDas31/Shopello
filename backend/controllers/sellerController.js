const Seller = require('../models/sellerModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');


// Apply For Seller 

exports.applySeller = catchAsyncError(async (req, res, next) => {
    let images = [];

    if (typeof req.body.images === 'string') {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "Sellers"
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    };

    req.body.images = imagesLinks;

    const seller = await Seller.create(req.body);

    res.status(201).json({
        success: true,
        seller,
    })

    
})

// Get All Application --- Admin

exports.getAllApplications = catchAsyncError(async(req,res,next)=>{
    const  applications = await Seller.find();
    res.status(200).json({
        success: true,
        applications,
    })
})

// Get Application Details --- Admin

exports.getApplicationDetails = catchAsyncError(async(req,res,next) =>{
    const application = await Seller.findById(req.params.id);

    if (!application) {
        return next(new ErrorHandler("Application Not Found", 404));
    }

    res.status(200).json({
        success: true,
        application,
    });
})

// Application Status update --- Admin

exports.applicationStatusUpdate = catchAsyncError( async (req, res ,next )=> {

    const newStatus = {
        status: req.body.status,
    };

    await Seller.findByIdAndUpdate(req.params.id, newStatus,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({
        success: true,
    });
})