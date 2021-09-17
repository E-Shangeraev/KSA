const AdminJS = require('adminjs')
const ContactsModel = require('../../models/Contacts')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['inn', 'address', 'phone', 'mail', 'workTime', 'socials'],
  editProperties: ['inn', 'address', 'phone', 'mail', 'workTime', 'socials'],
  navigation: {
    icon: 'Information',
  },
}

module.exports = {
  options,
  resource: ContactsModel,
}
