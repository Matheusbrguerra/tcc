'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE Prescricao (
      IdPrescricao int NOT NULL AUTO_INCREMENT,
      IdAtendimento int NOT NULL,
      IdPessoa int NOT NULL,
      Dt_prescricao datetime NOT NULL,
      Dt_liberacao datetime,
      Dt_suspensao datetime,
      Chave_nrec int NOT NULL,
      Dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      Dt_atualizacao datetime NOT NULL,
      PRIMARY KEY(IdPrescricao),
      CONSTRAINT FK_Atendimento_Prescr FOREIGN KEY(IdAtendimento)
      REFERENCES Atendimento(IdAtendimento),
      CONSTRAINT FK_Pessoa_Prescr FOREIGN KEY(IdPessoa)
      REFERENCES Pessoas(IdPessoa),
      CONSTRAINT FK_UsuarioCriacaoPrescr FOREIGN KEY(Chave_nrec)
      REFERENCES Usuarios(IdUsuario),
      CONSTRAINT FK_UsuarioPrescr FOREIGN KEY(Chave)
      REFERENCES Usuarios(IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Prescricao');
  }
};