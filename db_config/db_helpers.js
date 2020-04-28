const db = require("./db_config");

// Users queries

function allUsers() {
  return db.select("*").from("users");
}

function getUserById(id) {
  return db.select("*").from("users").where({ id });
}

function getUserByUsername(username) {
  return db.select("*").from("users").where({ username }).first();
}

function addUser(username, password, email) {
  return db("users").insert({ username, password, email });
}

function deleteUser(id) {
  return db("users").where({ id }).del();
}

// Customers queries

function allCustomers() {
  return db.select("*").from("customers");
}

function getCustomerById(id) {
  return db.select("*").from("customers").where({ id });
}

function addCustomer(
  first_name,
  last_name,
  company_name,
  email,
  tel_no,
  job_description
) {
  return db("customers").insert({
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description,
  });
}

function updatedCustomer(
  id,
  first_name,
  last_name,
  company_name,
  email,
  tel_no,
  job_description
) {
  return db("customers").where({ id }).update({
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description,
  });
}

function deleteCustomer(id) {
  return db("customers").where({ id }).del();
}

// Customers LOGS queries

function getAllLogs(id) {
  return db("customer_log").select("*").where("customer_id", "=", `${id}`);
}

function insertLog(customer_id, user_id, content) {
  return db("customer_log").insert({ customer_id, user_id, content });
}

module.exports = {
  //user exports

  allUsers,
  getUserById,
  addUser,
  deleteUser,
  getUserByUsername,

  // customers exports
  allCustomers,
  getCustomerById,
  addCustomer,
  updatedCustomer,
  deleteCustomer,

  // customers logs
  getAllLogs,
  insertLog,
};
