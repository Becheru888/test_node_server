exports.up = function (knex) {
  return knex.schema.createTable("prospect_log", (tbl) => {
    tbl.increments();
    tbl
      .integer("prospect_id")
      .references("id")
      .inTable("prospects")
      .index()
      .unsigned();
    tbl.integer("user_id").references("id").inTable("users").index().unsigned();
    tbl.text("content").notNullable();
    tbl.timestamps(true, true);
    tbl.text("user_initial").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("prospect_log");
};
