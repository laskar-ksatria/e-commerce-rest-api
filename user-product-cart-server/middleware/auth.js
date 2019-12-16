const { verifyToken } = require('../helpers/jwt')

module.exports = function (req,res,next) {
  
    if (req.headers.token) {        
        const decoded = verifyToken(req.headers.token)
        req.decoded = decoded
        next()
    }else {
        next({message: `You must login first as user`})
    }
}