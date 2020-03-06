const db = require("./db_config");

// Users queries

function allUsers() {
  return db.select("*").from("users");
}

function getUserById(id) {
  return db
    .select("*")
    .from("users")
    .where({ id });
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

function getCustomerById(id) {
  return db
    .select("*")
    .from("customers")
    .where({ id });
}

function addCustomer(first_name, last_name, company_name, job_description) {
  return db("customers").insert({
    first_name,
    last_name,
    company_name,
    job_description
  });
}

function updatedCustomer(
  id,
  first_name,
  last_name,
  company_name,
  job_description
) {
  return db("customers")
    .where({ id })
    .update({ first_name, last_name, company_name, job_description });
}

function deleteCustomer(id) {
  return db("customers")
    .where({ id })
    .del();
}

module.exports = {
  //user exports

  allUsers,
  getUserById,
  addUser,
  deleteUser,

  // customers exports
  allCustomers,
  getCustomerById,
  addCustomer,
  updatedCustomer,
  deleteCustomer
};
