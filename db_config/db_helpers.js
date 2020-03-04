const db = require("./db_config");

function allUsers() {
  return db.select("*").from("users");
}

function addUser(username, password) {
  return db("users").insert({ username, password });
}

module.exports = {
  allUsers,
  addUser
};
