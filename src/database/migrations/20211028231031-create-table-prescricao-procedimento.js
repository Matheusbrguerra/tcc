'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE PrescricaoProcedimento (
      IdPrescrProc int NOT NULL,
      IdPrescricao int NOT NULL,
      IdProcedimento int NOT NULL,
      Dt_prescricao datetime NOT NULL,
      Dt_liberacao datetime,
      Dt_resultado datetime,
      Dt_suspensao datetime,
      IdStatusExec int NOT NULL,
      Chave_nrec int NOT NULL,
      Dt_atualizacao_nrec datetime NOT NULL,
      Chave int NOT NULL,
      Dt_atualizacao datetime NOT NULL,
      PRIMARY KEY(IdPrescricao,IdPrescrProc),
      CONSTRAINT FK_Prescr_Proc FOREIGN KEY(IdPrescricao)
      REFERENCES Prescricao(IdPrescricao),
      CONSTRAINT FK_Proc_Prescr FOREIGN KEY(IdProcedimento)
      REFERENCES Procedimento(IdProcedimento),
      CONSTRAINT FK_StatusExec_Prescr FOREIGN KEY(IdStatusExec)
      REFERENCES StatusExec(IdStatusExec),
      CONSTRAINT FK_UsuarioCriacaoPrescrProc FOREIGN KEY(Chave_nrec)
      REFERENCES Usuarios(IdUsuario),
      CONSTRAINT FK_UsuarioPrescrProc FOREIGN KEY(Chave)
      REFERENCES Usuarios(IdUsuario)
  )`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PrescricaoProcedimento');
  }
}
