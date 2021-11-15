'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Procedencia', ([
      {
        Nome: "Procedencia 1",
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 3,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Procedencia 2",
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao:new Date()
      },
      {
        Nome: "Procedencia 3",
        Chave_nrec: 3,
        Dt_atualizacao_nrec:new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Procedencia 4",
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Procedencia 5",
        Chave_nrec: 2,
        Dt_atualizacao_nrec:new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Procedencia 6",
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao:new Date()
      }
    ]
    ))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Procedencia', null, {})
  }
}