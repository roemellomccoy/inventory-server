
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chests').del()
    .then(function () {
      // Inserts seed entries
      return knex('chests').insert([
        {name: 'Breastplate of Oblivion', weight: 'Heavy', armor: 100},
        {name: 'Coat of Many Arms', weight: 'Medium', armor: 70},
        {name: 'Shirt of the Lost', weight: 'Light', armor: 40},
      ]);
    });
};
