import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) =>{
        table.uuid('id').primary()
        table.string('first_name').notNullable()
        table.string('username').unique().notNullable()
        table.string('password').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
}

