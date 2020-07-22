const jwt = require('jsonwebtoken')
const { promisify } = require('util')

// kiểm tra token gửi lên
const jwtVerify = promisify(jwt.verify)
module.exports.authenticate = (req, res, next) => {
    const token = req.header("token")
    if (!token) return res.status(401).json({
        message: "Token is required"
    })

    jwtVerify(token, "cybersoft")
        .then(decoded => {
            req.user = decoded
            next()
        })
        .catch(err => res.status(401).json({
        message: err.message
    }))
}

// phân quyền cho admin & client
module.exports.authorize = (userTypeArray) => {

 return (req, res, next) => {
    
    // vì autho đặt sau authen nên lấy được user info
     const { user } = req
     
     // không có trong mảng là -1, kiểm tra userType có thuộc phân quyền
     if (userTypeArray.indexOf(user.userType) === -1)
             return res.status(403).json({
            message: "You do not have a right permission. Must Admin"
        })
     
    next()
    }
}