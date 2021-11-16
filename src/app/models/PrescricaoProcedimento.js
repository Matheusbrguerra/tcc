'use strict';

const Sequelize = require('sequelize');
const tableName = 'PrescricaoProcedimento';

class PrescricaoProcedimento extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: 'IdPrescrProc',
                    type: Sequelize.INTEGER,
                    primaryKey:true,
                    autoIncrement:true
                },
                IdPrescricao: {
                    field: 'IdPrescricao',
                    type: Sequelize.INTEGER,
                    foreignKey:true
                },
                IdProcedimento: {
                    field: 'IdProcedimento',
                    type: Sequelize.INTEGER,
                    foreignKey:true
                },
                IdStatusExec: {
                    field: 'IdStatusExec',
                    type: Sequelize.INTEGER,
                    foreignKey:true
                },
                Dt_prescricao: {
                    type: Sequelize.DATE,
                },
                Dt_liberacao: {
                    type: Sequelize.DATE,
                },
                Dt_resultado: {
                    type: Sequelize.DATE,
                },
                Dt_suspensao: {
                    type: Sequelize.DATE,
                },
                Chave: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                Chave_nrec: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                createdAt: {
                    field:'Dt_atualizacao',
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    field:'Dt_atualizacao_nrec',
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            },
            {
                sequelize,
                tableName,
                timestamps: true
            }
        );
        return this;
    }

    static associate(models) {
        const { Prescricao,Procedimento,StatusExec } = models;
        this.belongsTo(StatusExec, { foreignKey: 'IdStatusExec' });
        this.belongsTo(Procedimento, { foreignKey: 'IdProcedimento' });
        this.belongsTo(Prescricao, { foreignKey: 'IdPrescricao' });
    }

}

module.exports = PrescricaoProcedimento;