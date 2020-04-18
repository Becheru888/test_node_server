require("dotenv").config();
const knex = require("knex");

const environment = process.env.ENV || "development";

const config = require("../knexfile")[environment];

const db = knex(config);

module.exports = db;
