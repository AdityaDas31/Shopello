const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    gst:{
        type: String,
        minlength: 15,
        maxlength:15,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    status:{
        type: String,
        default: "Processing"
    },
    applyAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Seller", sellerSchema);