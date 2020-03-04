const knex = require("knex");

const config = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "customers"
  }
};

const db = knex(config);

module.exports = db;
