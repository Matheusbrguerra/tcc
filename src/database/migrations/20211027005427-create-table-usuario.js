'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE Usuarios (
      IdUsuario int NOT NULL AUTO_INCREMENT,
      nome varchar(255) NOT NULL,
      senha varchar(64) NOT NULL,
      Chave_nrec int,
      dt_atualizacao_nrec datetime,
      dt_atualizacao datetime,
      PRIMARY KEY (IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};
