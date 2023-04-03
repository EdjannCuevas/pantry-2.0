/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('recipes', (table) => {
        table.increments('id').primary(),
        table.string('label', 255).notNullable();
        table.string('image', 3000).notNullable();
        table.specificType('ingredientLines', 'text[]').notNullable();
        table.string('url', 3000).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('recipes');
};
