const { Router } = require('express')
const ContactsController = require('../controllers/Contacts')
const router = Router()

router.get('/', ContactsController.getItems)

module.exports = router
