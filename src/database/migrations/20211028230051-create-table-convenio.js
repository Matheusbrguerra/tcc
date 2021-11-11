'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE Convenio (
      IdConvenio int NOT NULL AUTO_INCREMENT,
      Nome varchar(255) NOT NULL,
      Chave_nrec int NOT NULL,
      Dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      Dt_atualizacao datetime NOT NULL,
      PRIMARY KEY(IdConvenio),
      CONSTRAINT FK_UsuarioCriacao_Convenio foreign key (Chave_nrec) references
      Usuarios(IdUsuario),
      CONSTRAINT FK_Usuario_Convenio foreign key (Chave) references
      Usuarios(IdUsuario) 
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Procedimento');
  }
};