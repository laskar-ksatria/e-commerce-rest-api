const jwt = require('../middleware/jwt')

module.exports = (req,res,next) => {
    
    if (req.headers.token) {
        const decoded = jwt(req.headers.token)
        next()
    }else {
        next({message: 'You must login first as user'})
    }

}