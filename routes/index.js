const buildAdminRouter = require('./admin')
const mailRouter = require('./mail')
const aboutRouter = require('./about')
const servicesRouter = require('./services')
const contactsController = require('./contacts')

module.exports = {
  buildAdminRouter,
  mailRouter,
  aboutRouter,
  servicesRouter,
  contactsController,
}
