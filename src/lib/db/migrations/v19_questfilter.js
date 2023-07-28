const { log } = require('../../logger')

exports.up = async function migrationUp(knex) {
	await knex.schema.alterTable('quest', (table) => {
		table.integer('ar').notNullable().defaultTo(0)
	})
	log.info('Quest filter AR migration applied')
}

exports.down = async function migrationDown(knex) {
	log.info(knex)
}
