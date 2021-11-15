'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Atendimento', [
      {
        IdPessoa: 4,
        IdConvenio: 4,
        IdTipoAtend: 3,
        IdProcedencia: 3,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 4,
        IdConvenio: 4,
        IdTipoAtend: 3,
        IdProcedencia: 2,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 2,
        IdConvenio: 3,
        IdTipoAtend: 2,
        IdProcedencia: 5,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 3,
        IdConvenio: 5,
        IdTipoAtend: 2,
        IdProcedencia: 2,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 3,
        IdConvenio: 2,
        IdTipoAtend: 3,
        IdProcedencia: 5,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 3,
        IdConvenio: 4,
        IdTipoAtend: 3,
        IdProcedencia: 3,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 4,
        IdConvenio: 4,
        IdTipoAtend: 1,
        IdProcedencia: 1,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 3,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 3,
        IdConvenio: 4,
        IdTipoAtend: 3,
        IdProcedencia: 4,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 2,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 5,
        IdConvenio: 3,
        IdTipoAtend: 1,
        IdProcedencia: 2,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 2,
        Dt_atualizacao: new Date()
      },
      {
        IdPessoa: 3,
        IdConvenio: 3,
        IdTipoAtend: 4,
        IdProcedencia: 5,
        Dt_entrada: new Date(),
        Dt_alta: new Date(),
        Dt_cancelamento: null,
        Chave_nrec: 1,
        Dt_atualizacao_nrec: new Date(),
        Chave: 1,
        Dt_atualizacao: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Atendimento', null, {})
  }
}
