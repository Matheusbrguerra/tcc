'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE Procedencia (
      IdProcedencia int NOT NULL AUTO_INCREMENT,
      Nome varchar(255) NOT NULL,
      Chave_nrec int NOT NULL,
      Dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      Dt_atualizacao datetime NOT NULL,
      PRIMARY KEY(IdProcedencia),
      CONSTRAINT FK_UsuarioCriacao_Procedencia foreign key (Chave_nrec) references
      Usuarios(IdUsuario),
      CONSTRAINT FK_Usuario_Procedencia foreign key (Chave) references
      Usuarios(IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Procedimento');
  }
}