const { model, Schema } = require('mongoose')

const ServiceSchema = new Schema({
  uploadedFile: { type: JSON, required: false },
  title: { type: String, required: true },
  text: { type: String, required: true },
})

module.exports = model('Service', ServiceSchema)
