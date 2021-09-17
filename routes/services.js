const { Router } = require('express')
const ServiceController = require('../controllers/Service')
const router = Router()

router.get('/', ServiceController.getAll)

module.exports = router
