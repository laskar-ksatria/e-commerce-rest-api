const Cart = require('../models/cart')


class CartController {

    static create(req,res,next) {
        
        let productId = req.params.productId
        let userId = req.decoded.id
        let amounts = Number(req.body.amounts)
        let totalPrice = req.totalPrice
        let stock = null
        let accumulateStock = null
        Cart.findOne({product: productId}).populate('product')
            .then(function(cart) {
                
                if (cart) {
                    stock = cart.product.stocks
                    totalPrice = cart.product.price * amounts
                    console.log(totalPrice)
                    accumulateStock = cart.amounts + amounts
                    console.log()
                    if (accumulateStock > stock) {
                        res.status(403).json({message: 'Product Stocks is not enought'})
                    }else {
                        return Cart.updateOne({product: productId}, {amounts: accumulateStock})
                            .then(function () {
                                res.status(202).json({message: 'Your cart has already updated'})
                            })
                    }
                }else {
                    console.log(totalPrice)
                    return Cart.create({
                        product: productId,
                        user: userId,
                        amounts: amounts,
                        totalPrice: totalPrice
                    })
                    .then(function (cart) {
                        res.status(201).json({message: 'Product already added to your cart'})
                    })
                }
            })
            .catch(next)
    }

    static readMe (req,res,next) {
        let userId = req.decoded.id
        Cart.find({user: userId})
            .then(function (carts) {
                res.status(200).json(carts)
            })
            .catch(next)
    }

    static updateAmount (req,res,next) {
        let cartId = req.params.cartId
        let amounts = req.body.amounts
        Cart.updateOne({_id: cartId}, {amounts: amounts})
            .then(function () {
                res.status(202).json({message: 'Your product cart already updated'})
            })
            .catch(next)
    }

    static delete (req,res,next) {
        console.log('masuk controller')
        let cartId = req.params.cartId
        Cart.deleteOne({_id: cartId})
            .then(function () {
                res.status(202).json({message: 'Cart that you choose already deleted'})
            })
            .catch(next)
    }

    
};

module.exports = CartController;