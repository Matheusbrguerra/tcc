'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Procedimento',[
      {
        Nome: "Procedimento 1",
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 3,
        Dt_atualizacao:new Date()
      },
      {
        Nome: "Procedimento 2",
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Procedimento 3",
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Procedimento 4",
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Procedimento', null, {})
  }
}
