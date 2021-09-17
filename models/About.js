const { model, Schema } = require('mongoose')

const AboutSchema = new Schema({
  index: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  uploadedFile: { type: JSON, required: false },
})

module.exports = model('About', AboutSchema)
