import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Order', table => {
    table.increments('id').primary();
    table.string('description', 1000);
    table.integer('quantity').notNullable();
    table.float('value').notNullable();
    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}
export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTableIfExists('Order');
}
