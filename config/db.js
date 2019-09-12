const config = require('../knexfile')
const knex = require('knex')(config) // multiplas conexoes config['dev']

knex.migrate.latest([config])
module.exports = knex