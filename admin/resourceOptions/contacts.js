const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['phone', 'mail'],
  editProperties: ['phone', 'mail'],
  navigation: {
    icon: 'Bullhorn',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
