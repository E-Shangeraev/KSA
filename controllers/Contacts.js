const Contacts = require('../models/Contacts.js')

class ContactsController {
  async getAll(req, res) {
    try {
      const items = await Contacts.findOne()
      res.status(200).json(items)
    } catch (err) {
      res.status(500)
      throw new Error(err.message)
    }
  }
}

module.exports = new ContactsController()
