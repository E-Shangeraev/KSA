const AdminJS = require('adminjs')
const AboutModel = require('../../models/About')
const features = require('../features')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['index', 'title', 'text', 'uploadedFile'],
  editProperties: ['index', 'title', 'text', 'uploadedFile'],
  navigation: {
    icon: 'Partnership',
  },
  properties: {
    mimeType: { isVisible: false },
    text: {
      type: 'richtext',
    },
  },
}

module.exports = {
  options,
  resource: AboutModel,
  features,
}
