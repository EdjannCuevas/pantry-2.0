/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('pantry', (table) => {
        table.increments('id').primary(),
        table.string('name', 255).notNullable();
        table.string('exp_date', 255).notNullable();
        table.string('img_source', 3000).notNullable();
        table.integer('qty').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('pantry');
};
