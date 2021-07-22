
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('legs').del()
    .then(function () {
      // Inserts seed entries
      return knex('legs').insert([
        {name: 'Greaves of the Bottomless', weight: 'Heavy', armor: 50},
        {name: 'Pants of the Stinking', weight: 'Medium', armor: 30},
        {name: 'Skirt of the Man', weight: 'Light', armor: 10},
      ]);
    });
};
