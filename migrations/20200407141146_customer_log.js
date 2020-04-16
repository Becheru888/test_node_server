exports.up = function (knex) {
  return knex.schema.createTable("customer_log", (tbl) => {
    tbl.increments("id");
    tbl.string("log", 1000).notNullable();
    tbl.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
    
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers");
};
