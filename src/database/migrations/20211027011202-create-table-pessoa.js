'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE Pessoas (
      IdPessoa int NOT NULL AUTO_INCREMENT,
      nome varchar(255) NOT NULL,
      idade int,
      cpf int NOT NULL,
      prontuario int NOT NULL,
      Chave_nrec int NOT NULL,
      dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      dt_atualizacao datetime NOT NULL,
      PRIMARY KEY (IdPessoa),
     CONSTRAINT FK_UsuarioChaveCriacao FOREIGN KEY (Chave_nrec)
     REFERENCES Usuarios(IdUsuario),
     CONSTRAINT FK_UsuarioChave FOREIGN KEY (Chave)
     REFERENCES Usuarios(IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pessoas');
  }
};