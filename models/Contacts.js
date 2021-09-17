const { model, Schema } = require('mongoose')

const SocialSchema = new Schema({
  vk: String,
  instagram: String,
  youTube: String,
  whatsApp: String,
  telegram: String,
})

const ContactsSchema = new Schema({
  inn: String,
  address: String,
  phone: String,
  workTime: String,
  mail: new Schema({
    title: String,
    url: String,
  }),
  socials: SocialSchema,
})

module.exports = model('Contacts', ContactsSchema)
