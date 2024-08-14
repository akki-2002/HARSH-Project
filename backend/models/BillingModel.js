const mongoose = require('mongoose')

const billingSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    }, 
    country: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    state: {
        type: String, 
        required: true
    },
    pincode: {
        type: Number, 
        required: true
    },
    phoneNumber: {
        type: Number, 
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Billing', billingSchema)