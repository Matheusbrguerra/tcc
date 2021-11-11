'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE StatusExec (
      IdStatusExec int NOT NULL AUTO_INCREMENT,
      Nome varchar(255) NOT NULL,
      Chave_nrec int NOT NULL,
      Dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      Dt_atualizacao datetime NOT NULL,
      PRIMARY KEY(IdStatusExec),
      CONSTRAINT FK_UsuarioCriacao_StatusExec foreign key (Chave_nrec) references
      Usuarios(IdUsuario),
      CONSTRAINT FK_Usuario_StatusExec foreign key (Chave) references
      Usuarios(IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StatusExec');
  }
};