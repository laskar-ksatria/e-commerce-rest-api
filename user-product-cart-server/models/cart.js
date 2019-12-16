const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amounts: {
        type: Number,
        required: [true, 'Amount cannot be empty']
    },
    totalPrice: {
        type: Number,
    }
})

const cart = mongoose.model('Cart', cartSchema)

module.exports = cart;
