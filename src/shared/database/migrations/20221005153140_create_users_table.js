/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
   table.increments('id').primary();
   table.text('name').notNullable();
   table.text('email').notNullable();
   table.text('password').notNullable();
   table.text('whatsapp').notNullable();
   table.text('username').notNullable();
   table.text('id_type').notNullable();
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
  
};
