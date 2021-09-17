const ServiceModel = require('../models/Service.js')
require('dotenv').config()

class ServiceController {
  async getAll(req, res) {
    try {
      let items = await ServiceModel.find()
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

module.exports = new ServiceController()
