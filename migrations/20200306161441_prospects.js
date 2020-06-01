exports.up = function (knex) {
  return knex.schema.createTable("prospects", (tbl) => {
    tbl.increments();
    tbl.string("first_name", 255).defaultTo("N/A");
    tbl.string("last_name", 255).defaultTo("N/A");
    tbl.string("company_name", 255).defaultTo("N/A");
    tbl.string("email", 255).defaultTo("N/A");
    tbl.string("tel_no", 255).defaultTo("N/A");
    tbl.string("tel_no2", 255).defaultTo("N/A");
    tbl.string("job_description", 255).defaultTo("Descriere lipsa :-(");
    tbl.timestamps(true, true);
    tbl.string("address", 500).defaultTo("N/A");
    tbl.string("position", 255).defaultTo("N/A");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("prospects");
};
