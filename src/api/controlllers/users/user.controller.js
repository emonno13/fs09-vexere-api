const { User } = require("../../models/User")
const bcrypt = require("bcrypt");
const { isMatch } = require("lodash");
const jwt = require("jsonwebtoken")
const { promisify } = require("util") // build-in của nodejs
const _ = require('lodash')

// register
const createUser = (req, res, next) => {
    const { email, password, fullName } = req.body;
    
    // Sau khi validation
    const newUser = new User({ email, password, fullName })
        newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => {
            if (err.status === 400) return res.status(err.status).json({
                "message":err.message
            })
            return res.json(err)
    })

    // Trước khi validation
    // let newUser;
    // User.findOne({ email })
    //     .then(user => {
    //         if (user) return Promise.reject({
    //             status: 400,
    //             message: "Email exists"
    //         })
            
    //         // if user not exist
    //         newUser = new User({ email, password, fullName })
    //         // return  bcrypt.genSalt(10)
    //         return newUser.save()
    //     })
    //     // .then(salt => bcrypt.hash(newUser.password, salt))
    //     // .then(hash => {
    //     //     newUser.password = hash;
    //     //     return newUser.save()
    //     // })
    //     .then(user =>res.status(200).json(user))
    //     .catch(err => {
    //         if (err.status === 400) return res.status(err.status).json({
    //             "message":err.message
    //         })
    //         return res.json(err)
    //     })
}

// login
const jwtSign = promisify(jwt.sign)
const loginUser = (req, res, next) => {
    const { email, password } = req.body;
    let _user
    User.findOne({ email })
        .then(user => {
            _user = user
            if (!user) return Promise.reject({
                status:400,
                message: "Email not found"
            })
            
            // so sánh pass nhập vào và pass dc hash trong db
            return bcrypt.compare(password,user.password)
        })
        .then(isMatch => {
            if (!isMatch) return Promise.reject({
                status:400,
                message: "Wrong password"
            })

            const payload =
                _.pick(_user, ["_id", "email", "fullName", "userType"])
            return jwtSign(
                payload,
                "cybersoft",
                {
                    expiresIn: "1h"
                }
            )
            //res.status(200).json({"message":"success"})
        })
        .then(token => {
            return res.status(200).json({
                message: " Login successfully",
                token
            })
        })
        .catch(err => {
            if (err.status === 400) return res.status(err.status).json({
                "message":err.message
            })
            return res.json(err)
    })
}

// upload avatar
const uploadAvatar = (req, res, next) => {
    const { email } = req.user

    User.findOne({ email })
        .then(user => {
        
        if (!user) return Promise.reject({
            status: 404,
            message: "Email not exist"
        })
            
         user.avatar = req.file.path
         return user.save()
        })
        .then(user => res.status(200).json(user))
        .catch(err => {
            if (err.status === 400)
                return res.status(err.status).json({
                message: err.message
                })
            return res.json(err)
    })

}


module.exports = {
    createUser,
    loginUser,
    uploadAvatar
}