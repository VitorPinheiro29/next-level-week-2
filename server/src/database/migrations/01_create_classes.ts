import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });

  //no onDelete, o cascade serve pra, qnd o professor deletar sua conta, tudo o que tem a ver com ele é deletado também
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}
