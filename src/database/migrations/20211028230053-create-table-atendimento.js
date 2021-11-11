'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE Atendimento (
      IdAtendimento int NOT NULL AUTO_INCREMENT,
      IdPessoa int NOT NULL,
      IdConvenio int NOT NULL,
      IdTipoAtend int NOT NULL,
      IdProcedencia int NOT NULL,
      Dt_entrada datetime NOT NULL,
      Dt_alta datetime,
      Dt_cancelamento datetime,
      Chave_nrec int NOT NULL,
      Dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      Dt_atualizacao datetime NOT NULL,
      PRIMARY KEY(IdAtendimento),
      CONSTRAINT FK_Pessoa_Atend FOREIGN KEY(IdPessoa)
      REFERENCES Pessoas(IdPessoa),
      CONSTRAINT FK_Convenio_Atend FOREIGN KEY(IdConvenio)
      REFERENCES Convenio(IdConvenio),
      CONSTRAINT FK_TiooAtend_Atend FOREIGN KEY(IdTipoAtend)
      REFERENCES TipoAtendimento(IdTipoAtend),
      CONSTRAINT FK_Proced_Atend FOREIGN KEY(IdProcedencia)
      REFERENCES Procedencia(IdProcedencia),
      CONSTRAINT FK_UsuarioCriacaoAtend FOREIGN KEY(Chave_nrec)
      REFERENCES Usuarios(IdUsuario),
      CONSTRAINT FK_UsuarioAtend FOREIGN KEY(Chave)
      REFERENCES Usuarios(IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Atendimento');
  }
}