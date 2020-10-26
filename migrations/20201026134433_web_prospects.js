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
    tbl.string("web_applications", 255).defaultTo("N/A");
    tbl.string("websites", 255).defaultTo("N/A");
    tbl.string("digital_marketing", 255).defaultTo("N/A");
    tbl.string("ui_ux_design", 255).defaultTo("N/A");
    tbl.string("other", 500).defaultTo("N/A");
    tbl.string("project_description", 255).defaultTo("Descriere lipsa :-(");
    tbl.string("budget", 255).defaultTo("N/A");
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("web_prospects");
};
