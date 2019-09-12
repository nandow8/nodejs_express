// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'node_knex',
      user:     'newuser',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
