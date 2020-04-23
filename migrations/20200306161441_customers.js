exports.up = function (knex) {
  return knex.schema.createTable("customers", (tbl) => {
    tbl.increments("id");
    tbl.string("first_name", 255).defaultTo("N/A");
    tbl.string("last_name", 255).defaultTo("N/A");
    tbl.string("company_name", 255).defaultTo("N/A");
    tbl.string("email", 255).defaultTo("N/A");
    tbl.string("tel_no", 255).defaultTo("N/A");
    tbl.string("job_description", 255).defaultTo("N/A");
    tbl.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
    tbl.string("address", 500).defaultTo("N/A");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers");
};
