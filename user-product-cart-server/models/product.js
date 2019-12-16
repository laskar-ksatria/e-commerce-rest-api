const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: [true, 'Product Name cannot be empty']
    },
    product_description: {
        type: String,
        required: [true, 'Product description cannot be empty']
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be empty']
    },
    stocks: {
        type: Number,
        required: [true, 'Product stock cannnot be empty'],
        min: [1, 'Stock must be larger than 0']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product_image: {
        type: String
    }
})

const product = mongoose.model('Product', productSchema)

module.exports = product;