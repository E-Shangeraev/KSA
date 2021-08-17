const { model, Schema } = require('mongoose')

const ContactsSchema = new Schema({
  phone: String,
  mail: String,
})

module.exports = model('Contacts', ContactsSchema)
