/* eslint-disable camelcase */
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

// Prospects queries

function allProspects() {
  return db.select("*").from("prospects");
}

function getProspectById(id) {
  return db.select("*").from("prospects").where({ id });
}

function addProspect(
  first_name,
  last_name,
  company_name,
  email,
  tel_no,
  job_description
) {
  return db("prospects").insert({
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description,
  });
}

function updateProspect(
  id,
  first_name,
  last_name,
  company_name,
  email,
  tel_no,
  job_description
) {
  return db("prospects").where({ id }).update({
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description,
  });
}

async function deleteProspect(prospect_id) {
  await deleteLog(prospect_id);
  return db("prospects").where("id", "=", prospect_id).del();
}

// LOGS HELPERS

function getAllLogs(id) {
  return db("prospect_log").select("*").where("prospect_id", "=", `${id}`);
}

function insertLog(prospect_id, user_id, content, user_initial) {
  return db("prospect_log").insert({
    prospect_id,
    user_id,
    content,
    user_initial,
  });
}

function deleteLog(prospect_id) {
  return db("prospect_log")
    .where("prospect_log.prospect_id", "=", prospect_id)
    .del();
}

module.exports = {
  // user exports

  allUsers,
  getUserById,
  addUser,
  deleteUser,
  getUserByUsername,

  // prospects exports
  allProspects,
  getProspectById,
  addProspect,
  updateProspect,
  deleteProspect,

  // prsopects logs
  getAllLogs,
  insertLog,
  deleteLog,
};
