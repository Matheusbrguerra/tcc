'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('StatusExec', [
      {
        Nome: "Solicitação pendente",
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Solicitação liberada",
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao:new Date()
      },
      {
        Nome: "Coleta",
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Recoleta",
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Suspenso",
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 3,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Aprovação",
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        Nome: "Liberação do resultado",
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao:new Date()
      },
      {
        Nome: "Liberação do laudo",
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StatusExec', null, {})
  }
}
