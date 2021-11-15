'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Convenio', ([
      {
        Nome: "Convenio 1",
        Chave_nrec: 2,
        Dt_atualizacao: new Date(),
        Chave: 3,
        Dt_atualizacao_nrec: new Date()
      },
      {
        Nome: "Convenio 2",
        Chave_nrec: 3,
        Dt_atualizacao:new Date(),
        Chave: 1,
        Dt_atualizacao_nrec:new Date()
      },
      {
        Nome:"Convenio 3",
        Chave_nrec: 3,
        Dt_atualizacao:new Date(),
        Chave: 2,
        Dt_atualizacao_nrec: new Date()
      },
      {
        Nome: "Convenio 4",
        Chave_nrec: 3,
        Dt_atualizacao: new Date(),
        Chave: 1,
        Dt_atualizacao_nrec: new Date()
      },
      {
        Nome: "Convenio 5",
        Chave_nrec: 1,
        Dt_atualizacao: new Date(),
        Chave: 3,
        Dt_atualizacao_nrec: new Date()
      }
    ]
    ))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Convenio', null, {})
  }
}