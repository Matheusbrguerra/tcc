'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'Sandro',
      senha: 'teste123',
      Chave_nrec: null,
      dt_atualizacao: new Date(),
      dt_atualizacao_nrec: new Date()
    }, {
      nome: 'Matheus',
      senha: 'teste456',
      Chave_nrec: 1,
      dt_atualizacao: new Date(),
      dt_atualizacao_nrec: new Date()
    },
    {
      nome: 'Samuel',
      senha: 'teste789',
      Chave_nrec: 1,
      dt_atualizacao: new Date(),
      dt_atualizacao_nrec: new Date()
    },
    {
      nome: 'Robo',
      senha: '12teste34',
      Chave_nrec: 1,
      dt_atualizacao: new Date(),
      dt_atualizacao_nrec: new Date()
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {})
  }
}
