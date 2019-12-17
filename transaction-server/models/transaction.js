const mongoose = require('mongoose')
const timeStamp = require('mongoose-timestamp')

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    totalPrice: {
        type: Number
    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

transactionSchema.plugin(timeStamp)

const transaction = mongoose.model('Transaction', transactionSchema)

module.exports = transaction;