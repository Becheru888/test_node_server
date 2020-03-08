exports.up = function(knex) {
  return knex.schema.createTable("customers", tbl => {
    tbl.increments("id");
    tbl.string("first_name", 255).defaultTo("N/A");
    tbl.string("last_name", 255).defaultTo("N/A");
    tbl.string("company_name", 255).defaultTo("N/A");
    tbl.string("job_description", 255).defaultTo("N/A");
    tbl.date('data')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("customers");
};
