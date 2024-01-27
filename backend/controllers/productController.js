const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require("cloudinary");



// Create a product -- Admin

exports.createProduct = catchAsyncError(async (req, res, next) => {
    let images = [];
    if (typeof req.body.images === "string") {
        images.push(req.body.images)
    } else {
        images = req.body.images;
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "products",
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    req.body.images = imagesLinks;

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });
});

// Get All Product 

exports.getAllProducts = catchAsyncError(async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
    });
});

// Get All Product -- Admi

exports.getAdminProduct = catchAsyncError(async(req, res, next) =>{

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products,
    });

});


// Get Product Details

exports.getProductDetails = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler(`Product not found`, 404));
    };

    res.status(200).json({
        success: true,
        product,
    });

})


// Update Product -- Admin

exports.updateProduct = catchAsyncError(async (req, res, next) => {

    let product = Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler(`Product not found`, 404));
    };

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        product,
    });

});


// Delete Product -- Admin

exports.deleteProduct = catchAsyncError(async (req, res, next) => {

    let product = Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler(`Product not found`, 404));
    };

    // await product.remove();
    await Product.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully",
    });
});

// Approve Product -- Admin

exports.productApproval = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler(`Product not found`, 404));
    };

    product.approveStatus = !product.approveStatus;

    await product.save();

    const message = product.approveStatus ? "Product Approve Successfully" : "Product Disapprove Successfully";


    res.status(200).json({
        success: true,
        message: message,
    });

});


// Available Product -- Admin


exports.productAvailable = catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler(`Product not found`, 404));
    };

    product.availableStatus = !product.availableStatus;

    await product.save();

    const message = product.availableStatus ? "Product Available" : "Product Not Available";

    res.status(200).json({
        success: true,
        message: message,
    });
})