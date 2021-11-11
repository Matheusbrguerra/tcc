'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE Procedimento (
      IdProcedimento int NOT NULL AUTO_INCREMENT,
      Nome varchar(255) NOT NULL,
      Chave_nrec int NOT NULL,
      Dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      Dt_atualizacao datetime NOT NULL,
      PRIMARY KEY(IdProcedimento),
      CONSTRAINT FK_UsuarioCriacao_Procedimento foreign key (Chave_nrec)references
      Usuarios(IdUsuario),
      CONSTRAINT FK_Usuario_Procedimento foreign key (Chave)references
      Usuarios(IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Procedimento');
  }
}