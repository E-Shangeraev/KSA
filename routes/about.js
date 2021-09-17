const { Router } = require('express')
const AboutController = require('../controllers/About')
const router = Router()

router.get('/', AboutController.getAll)

module.exports = router
