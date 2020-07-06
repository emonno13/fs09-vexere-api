const express = require('express')
const ticketControllor = require('./ticket.controller')
const { authenticate, authorize } = require('../../../../middlewares/auth')

const router = express.Router()

router.post(
    '/tickets',
    authenticate,
    ticketControllor.createTicket
)


module.exports = router