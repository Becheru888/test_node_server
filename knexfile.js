// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST_LOCAL,
      user: process.env.DB_USER_LOCAL,
      password: process.env.DB_PASSWORD_LOCAL,
      database: 'cms'
    }
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  production: {
    client: 'mysql',
    connection: {
      database: 'heroku_325cbd6c4c08876',
      host: process.env.DB_HOST_PRODUCTION,
      user: process.env.DB_USERNAME_PRODUCTION,
      password: process.env.DB_PASS_PRODUCTION
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
