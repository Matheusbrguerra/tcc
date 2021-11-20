'use strict';

const Sequelize = require('sequelize');
const tableName = 'Prescricao';

class Prescricao extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: 'IdPrescricao',
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                IdAtendimento: {
                    field:'IdAtendimento',
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                },
                IdPessoa: {
                    field:'IdPessoa',
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                },
                Dt_prescricao: {
                    field:'Dt_prescricao',
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                Dt_liberacao:  {
                    field:'Dt_liberacao',
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                Dt_suspensao:  {
                    field:'Dt_suspensao',
                    allowNull: true,
                    type: Sequelize.DATE,
                },
                Chave_nrec: {
                    type: Sequelize.INTEGER,
                },
                Chave: {
                    type: Sequelize.INTEGER,
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
                timestamps: true,
            }
        );
        return this;
    }

    static associate(models) {
        const { Atendimento, Pessoa } = models;
        this.belongsTo(Atendimento, { foreignKey: 'IdAtendimento' })
        this.belongsTo(Pessoa, { foreignKey: 'IdPessoa' });
    }

}

module.exports = Prescricao;
