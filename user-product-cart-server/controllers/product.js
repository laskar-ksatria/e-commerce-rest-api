const Product = require('../models/product')

class ProductController {

    static readFew (req,res,next) {
        Product.find({})
            .then(function (products) {
                let productOp = [];
                for (let i = 0; i < 9; i++) {
                    productOp.push(products[i])
                }
                res.status(200).json(productOp)
            })
            .catch(next)
    };

    static readAll (req,res,next) {
        Product.find({})
            .then(function (products) {
                res.status(200).json(products)
            })
            .catch(next)
    }

    static readMe (req,res,next) {
        const userId = req.decoded.id
        Product.find({user: userId})
            .then(function (products) {
                res.status(200).json(products)
            })
            .catch(next)
    }

    static create (req,res,next) {
        console.log(req.body)
        let { product_name, product_description} = req.body
        let price = Number(req.body.price)
        let stocks = Number(req.body.stocks)
        Product.create({
            product_name,
            product_description,
            price,
            stocks,
            product_image: '',
            user: req.decoded.id
        })
        .then(function (product) {
            res.status(201).json({message: `Your product has been successfully added`})
        })
        .catch(next)
    }

    static updateProduct (req,res,next) {
        const productId = req.params.productId
        let { product_name, product_description, price, stock } = req.body

        Product.updateOne({_id: productId},{product_name,product_description,price,stock},{omitUndefined: true})
            .then(function () {
                res.status(202).json({message: `Your product has been successfully updated`})
            })
            .catch(next)
            
    }

    static delete (req,res,next) {
        const productId = req.params.productId
        Product.deleteOne({_id: productId})
            .then(function () {
                res.status(202).json({message: `Your product has been successfully deleted`})
            })
            .catch(next)
    }

    static updateProductImage (req,res,next) {
        const productId = req.params.productId
        Product.updateOne({_id: productId},{product_image: ''})
            .then(function () {
                res.status(202).json({message: `Your product image has been update`})
            })
            .catch(next)
    };

}

module.exports = ProductController