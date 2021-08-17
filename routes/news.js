const { Router } = require('express')
const News = require('../controllers/News')
const router = Router()

router.get('/', News.getItems)

module.exports = router
