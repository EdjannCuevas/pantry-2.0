/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.alterTable(('recipes'), (table) => {
        table.string('uid', 255).notNullable();
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    return await knex.schema.alterTable(('recipes'), (table) => {
        table.dropColumn('uid', 255);
    })
  };
  