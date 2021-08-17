const News = require('../models/News.js')
require('dotenv').config()

class NewsController {
  async getItems(req, res) {
    try {
      let items = await News.find()
      items = items.map(item => {
        const copy = Object.assign({}, item._doc)
        copy.image = process.env.AWSURI + item.uploadedFile.path
        return copy
      })
      res.status(200).json(items)
    } catch (err) {
      res.status(400)
      throw err
    }
  }
}

module.exports = new NewsController()
