'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Prescricao', [
      {
        IdAtendimento: 1,
        IdPessoa: 4,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 2,
        IdPessoa: 2,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 3,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 3,
        IdPessoa: 1,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 4,
        IdPessoa: 4,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 5,
        IdPessoa: 4,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 3,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 6,
        IdPessoa: 2,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 7,
        IdPessoa: 1,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 8,
        IdPessoa: 5,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 9,
        IdPessoa: 2,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 10,
        IdPessoa: 3,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 1,
        IdPessoa: 4,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 2,
        IdPessoa: 2,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 3,
        IdPessoa: 1,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 4,
        IdPessoa: 4,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 5,
        IdPessoa: 4,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 3,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 6,
        IdPessoa: 2,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 3,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 7,
        IdPessoa: 1,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 8,
        IdPessoa: 5,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 7,
        IdPessoa: 1,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdAtendimento: 10,
        IdPessoa: 3,
        Dt_prescricao: new Date(),
        Dt_liberacao: new Date(),
        Dt_suspensao: null,
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Prescricao', null, {})
  }
}
