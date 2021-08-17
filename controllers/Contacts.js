const Contacts = require('../models/Contacts.js')

class ContactsController {
  async getItems(req, res) {
    try {
      const items = await Contacts.find()
      res.status(200).json(items)
    } catch (err) {
      res.status(400)
      throw err
    }
  }
}

module.exports = new ContactsController()
