
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('arms').del()
    .then(function () {
      // Inserts seed entries
      return knex('arms').insert([
        {name: 'Gauntlets of the Fallen Gods', weight: 'Heavy', armor: 50},
        {name: 'Gloves of the Confused', weight: 'Medium', armor: 30},
        {name: 'Gloves of the Mage', weight: 'Light', armor: 10},
      ]);
    });
};
