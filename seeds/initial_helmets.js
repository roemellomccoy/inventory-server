
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('helmets').del()
    .then(function () {
      // Inserts seed entries
      return knex('helmets').insert([
        {name: 'Helmet of Despair', wieght: 'Heavy', armor: 50},
        {name: 'Hat of Misery', wieght: 'Medium', armor: 30},
        {name: 'Cowl of Darkness', wieght: 'Light', armor: 10},
      ]);
    });
};
