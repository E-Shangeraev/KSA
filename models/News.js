const { model, Schema } = require('mongoose')

const NewsSchema = new Schema({
  uploadedFile: { type: JSON, required: false },
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

module.exports = model('News', NewsSchema)
