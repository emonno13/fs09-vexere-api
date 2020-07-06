const express = require('express')
const userControllor = require('./user.controller')
const { uploadImage } = require('../../../../middlewares/uploadImages')
const { authenticate } = require('../../../../middlewares/auth')
const { validatePostUser } = require('../../../../middlewares/validation/users/postUser')

const router = express.Router()

router.post('/users/register',validatePostUser, userControllor.createUser)
router.post('/users/login', userControllor.loginUser)
router.patch('/users/uploadAvatar',
    authenticate,
    uploadImage("avatar"),
    userControllor.uploadAvatar)

module.exports = router