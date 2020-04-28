exports.up = function (knex) {
  return knex.schema.createTable("customer_log", (tbl) => {
    tbl.increments();
    tbl
      .integer("customer_id")
      .references("id")
      .inTable("customers")
      .index()
      .unsigned();
    tbl.integer("user_id").references("id").inTable("users").index().unsigned();
    tbl.text("content").notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customer_log");
};
