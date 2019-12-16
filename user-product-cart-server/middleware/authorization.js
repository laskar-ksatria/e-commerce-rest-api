const User = require('../models/user')
const Product = require('../models/product')
const Cart = require('../models/cart')

class Authorization {

    static authoAsUser (req,res,next) {
        let productId = req.params.productId
        Product.findOne({_id: productId}).populate('user')
            .then(function (product) {
                console.log(product)
                if (product) {
                  
                    if (product.user.id == req.decoded.id) {
                        next()
                    }
                }else {
                    next({message: `You don't have authorize to do that!`})
                }                  
            })
            .catch(next)
    };

    static authoAsBuyer (req,res,next) {
       
        Product.findOne({_id: req.params.productId}).populate('user')
            .then(function (product) {

                if (product) {
              
                    if (product.user.id === req.decoded.id) {
                     
                        next({message: `You cannot buy your own product!`})
                    }else {
                        next()
                    }
                }else {
                    next()
                }
            })
            .catch(next)            
    };


    static authoCart (req,res,next) {
        Cart.findOne({_id: req.params.cartId}).populate('user')
            .then(function(cart) {
                if (cart.user.id === req.decoded.id) {
                    next()
                }else{
                    next({message: `You don't have authorize to do that!`})
                } 
            })
            .catch(next)
    }

}

module.exports = Authorization

