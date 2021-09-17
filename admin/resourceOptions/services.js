const AdminJS = require('adminjs')
const ServicesModel = require('../../models/Service')
const features = require('../features')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['index', 'title', 'text', 'uploadedFile'],
  editProperties: ['index', 'title', 'text', 'uploadedFile'],
  navigation: {
    icon: 'List',
  },
  properties: {
    mimeType: { isVisible: false },
  },
}

module.exports = {
  options,
  resource: ServicesModel,
  features,
}
