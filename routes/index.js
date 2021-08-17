const buildAdminRouter = require('./admin')
const mailRouter = require('./mail')
const newsRouter = require('./news')
const contactsController = require('./contacts')

module.exports = {
  buildAdminRouter,
  mailRouter,
  newsRouter,
  contactsController,
}
