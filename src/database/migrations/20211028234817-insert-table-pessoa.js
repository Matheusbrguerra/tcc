'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pessoas', (
      [
        {
          nome: "Keith Stanley",
          idade: 58,
          cpf: 644335361,
          prontuario: 585527,
          Chave_nrec: 3,
          dt_atualizacao: new Date(),
          Chave: 2,
          dt_atualizacao_nrec: new Date()
        },
        {
          nome: "Kermit Myers",
          idade: 47,
          cpf: 548213582,
          prontuario: 237997,
          Chave_nrec: 2,
          dt_atualizacao:new Date(),
          Chave: 2,
          dt_atualizacao_nrec:new Date()
        },
        {
          nome: "Roary Rojas",
          idade: 30,
          cpf: 805556192,
          prontuario: 627739,
          Chave_nrec: 3,
          dt_atualizacao:new Date(),
          Chave: 2,
          dt_atualizacao_nrec:new Date()
        },
        {
          nome: "Sylvester Orr",
          idade: 62,
          cpf: 943094800,
          prontuario: 234974,
          Chave_nrec: 2,
          dt_atualizacao:new Date(),
          Chave: 1,
          dt_atualizacao_nrec:new Date()
        },
        {
          nome: "Hanae Ramos",
          idade: 66,
          cpf: 712381155,
          prontuario: 464854,
          Chave_nrec: 2,
          dt_atualizacao:new Date(),
          Chave: 2,
          dt_atualizacao_nrec:new Date()
        },
      ]
    ))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {})
  }
}
