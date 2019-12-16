const Product = require('../models/product')

const getPrice = async (req,res,next) => {
    let amounts = req.body.amounts
    const product = await Product.findOne({_id: req.params.productId})
    req.totalPrice = Number(amounts) * product.price
    next()
}

module.exports = getPrice