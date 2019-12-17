const Product = require('../models/product')
const User = require('../models/user')
const Cart = require('../models/cart')

function stockCheck (req,res,next) {
    
};


function checkBalanced (req,res,next) {
    let userId = req.decoded.userId
    let userBalanced = null
    let transactionInvoice = 0
    User.findOne({_id: userId})
        .then(function (user) {
            userBalanced = user.balanced;
            return Cart.find({user: userId})
                .then(function (carts) {
                    carts.forEach(function (cart) {
                        transactionInvoice += cart.totalPrice
                    })
                    if (userBalanced < transactionInvoice) {
                        next({message: `You must top up your balance first!`})
                    }else {
                        next()
                    }
                })
        })
        .catch(next)

};




module.exports = {
    stockCheck,
    checkBalanced
}


