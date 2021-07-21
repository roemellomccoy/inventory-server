
exports.up = function(knex) {
  return knex.schema.createTable('helmets', table => {
    table.increments('id');
    table.string('name');
    table.string('weight');
    table.integer('armor');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('helmets')
};
