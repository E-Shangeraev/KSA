const { model, Schema } = require('mongoose')

const SocialSchema = new Schema({
  vk: String,
  instagram: String,
  youTube: String,
  whatsApp: String,
  telegram: String,
})

const ContactsSchema = new Schema({
  address: String,
  phone: String,
  mail: String,
  clientMail: String,
  workTime: String,
  socials: SocialSchema,
})

module.exports = model('Contacts', ContactsSchema)
