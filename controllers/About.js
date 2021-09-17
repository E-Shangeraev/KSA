const AboutModel = require('../models/About.js')
require('dotenv').config()

class AboutController {
  async getAll(req, res) {
    try {
      let items = await AboutModel.find().sort({ index: 1 })
      items = items.map(item => {
        const copy = Object.assign({}, item._doc)
        copy.image = process.env.AWSURI + item.uploadedFile.path
        return copy
      })
      res.status(200).json(items)
    } catch (err) {
      res.status(500)
      throw new Error(err.message)
    }
  }
}

module.exports = new AboutController()
