const express = require('express')
const Router = express.Router()
const cartController = require('../controllers/cart')
const auth = require('../middleware/auth')
const autho = require('../middleware/authorization')
const getTotalPrice = require('../middleware/getTotalPrice')

Router.post('/:productId',auth,autho.authoAsBuyer,getTotalPrice,cartController.create)
Router.get('/', auth,cartController.readMe)
Router.patch('/:cartId', auth, cartController.updateAmount)
Router.delete('/:cartId', auth,autho.authoCart, cartController.delete)

module.exports = Router;
