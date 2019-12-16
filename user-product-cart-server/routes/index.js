const express = require('express')
const Router = express.Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')

Router.use('/users',userRouter)
Router.use('/products',productRouter)
Router.use('/carts', cartRouter)

module.exports = Router;