const db = require("./db_config");

function allUsers() {
  return db.select("*").from("users");
}

function addUser(username, password) {
  return db("users").insert({ username, password });
}

function deleteUser(id) {
 return db("users")
    .where({ id })
    .del();
}

module.exports = {
  allUsers,
  addUser,
  deleteUser
};
