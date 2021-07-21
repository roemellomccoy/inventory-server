
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('helmets').del()
    .then(function () {
      // Inserts seed entries
      return knex('helmets').insert([
        {name: 'Helmet of Despair', weight: 'Heavy', armor: 50},
        {name: 'Hat of Misery', weight: 'Medium', armor: 30},
        {name: 'Cowl of Darkness', weight: 'Light', armor: 10},
      ]);
    });
};
