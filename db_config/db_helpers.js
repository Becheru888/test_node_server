const db = require("./db_config");

// Users queries

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

// Customers queries

function allCustomers() {
  return db.select("*").from("customers");
}

function addCustomer(first_name, last_name, company_name, job_description) {
  return db("customers").insert({
    first_name,
    last_name,
    company_name,
    job_description
  });
}

module.exports = {
  //user exports

  allUsers,
  addUser,
  deleteUser,

  // customers exports
  allCustomers,
  addCustomer
};
