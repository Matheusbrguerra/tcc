'use strict';

const Sequelize = require('sequelize');
const tableName = 'Atendimento';

class Atendimento extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: 'IdAtendimento',
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                IdPessoa: {
                    field:'IdPessoa',
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                },
                IdConvenio: {
                    field:'IdConvenio',
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                },
                IdTipoAtend: {
                    field:'IdTipoAtend',
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                },
                IdProcedencia:{
                    field:'IdProcedencia',
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                },
                Dt_entrada: {
                    type: Sequelize.DATE,
                },
                Dt_alta:{
                    type: Sequelize.DATE,
                },
                Dt_cancelamento:{
                    type: Sequelize.DATE,
                },
                Chave_nrec: {
                    type: Sequelize.INTEGER,
                },
                Chave: {
                    type: Sequelize.INTEGER,
                },
                createdAt: {
                    field: 'Dt_atualizacao',
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    field: 'Dt_atualizacao_nrec',
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
        const { Pessoa,Convenio,Procedencia,TipoAtendimento } = models;
        this.belongsTo(Pessoa, { foreignKey: 'IdPessoa' });
        this.belongsTo(Convenio, { foreignKey:'IdConvenio'});
        this.belongsTo(Procedencia,{ foreignKey: 'IdProcedencia'});
        this.belongsTo(TipoAtendimento,{ foreignKey: 'IdTipoAtend'});
    }

}

module.exports = Atendimento;
