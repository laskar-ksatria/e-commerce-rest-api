const auth = require('../middleware/auth')
const autho = require('../middleware/authorization')
const express = require('express') 
const Router = express.Router()
const productController = require('../controllers/product')


Router.get('/opening', productController.readFew)
Router.get('/', auth, productController.readAll)
Router.post('/', auth, productController.create)
Router.get('/me', auth, productController.readMe)
Router.put('/:productId', auth,autho.authoAsUser,productController.updateProduct)
Router.delete('/:productId', auth,autho.authoAsUser, productController.delete)
Router.patch('/:productId', auth,autho.authoAsUser,productController.updateProductImage)

module.exports = Router;