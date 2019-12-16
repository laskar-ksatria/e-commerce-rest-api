const Cart = require('../controllers/cart')

class ValidatePriceAndStock {
    static checkStock (req,res,next) {
        let amounts = req.body.amounts
        let cartId = req.params.cartId
        Cart.findOne({_id: cartId})
            .then(function (cart) {
                
            })
            .catch(next)
    };

    static updatePrice (req,res,next) {

    };
};

module.exports = ValidatePriceAndStock

