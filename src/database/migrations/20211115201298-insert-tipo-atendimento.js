'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TipoAtendimento', ([
      {
        Nome: "Internado",
        Chave_nrec: 3,
        Dt_atualizacao: new Date(),
        Chave: 2,
        Dt_atualizacao_nrec: new Date()
      },
      {
        Nome: "Pronto Socorro",
        Chave_nrec: 3,
        Dt_atualizacao: new Date(),
        Chave: 3,
        Dt_atualizacao_nrec: new Date()
      },
      {
        Nome: "Externo",
        Chave_nrec: 2,
        Dt_atualizacao: new Date(),
        Chave: 2,
        Dt_atualizacao_nrec: new Date()
      },
      {
        Nome: "Ambulatorial",
        Chave_nrec: 2,
        Dt_atualizacao: new Date(),
        Chave: 3,
        Dt_atualizacao_nrec: new Date()
      }
    ]
    ))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TipoAtendimento', null, {})
  }
}