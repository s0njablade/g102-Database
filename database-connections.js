const environment = process.env.NODE_DEV || 'development'
const config = require('./knexfile')
const configEnv = config[environment]
const knex = require ('knex')
const connection = knex(configEnv)

module.exports = connection