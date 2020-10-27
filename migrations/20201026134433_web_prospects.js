/* eslint-disable semi */
/* eslint-disable quotes */
exports.up = function (knex) {
  return knex.schema.createTable("web_prospects", (tbl) => {
    tbl.increments();
    tbl.string("full_name", 255).defaultTo("N/A");
    tbl.string("email", 255).defaultTo("N/A");
    tbl.string("tel_no", 255).defaultTo("N/A");
    tbl.string("tel_no2", 255).defaultTo("N/A");
    tbl.string("company_name", 255).defaultTo("N/A");
    tbl.string("website_if_exists", 255).defaultTo("N/A");
    tbl.boolean("web_applications").defaultTo(false);
    tbl.boolean("websites").defaultTo(false);
    tbl.boolean("digital_marketing").defaultTo(false);
    tbl.boolean("ui_ux_design").defaultTo(false);
    tbl.string("other", 500).defaultTo("N/A");
    tbl.string("project_description", 255).defaultTo("Descriere lipsa.");
    tbl.string("budget", 255).defaultTo("N/A");
    tbl.boolean("existent_customer").defaultTo(false);
    tbl.boolean("from_web").defaultTo(true);
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("web_prospects");
};
