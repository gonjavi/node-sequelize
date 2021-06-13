'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profesors', [{
      firstName: 'John',
      lastName: 'Perez',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profesors', null, {});
  }
};
