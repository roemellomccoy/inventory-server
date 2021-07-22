
exports.up = function(knex) {
  return knex.schema.createTable('arms', table => {
    table.increments('id');
    table.string('name');
    table.string('weight');
    table.integer('armor');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('arms')
};
