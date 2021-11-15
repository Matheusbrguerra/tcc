'use strict';

const Sequelize = require('sequelize');
const tableName = 'Convenio';

class Convenio extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: 'IdConvenio',
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                Nome: {
                    type: Sequelize.STRING,
                },
                Chave_nrec: {
                    type: Sequelize.INTEGER,
                },
                Chave: {
                    type: Sequelize.INTEGER,
                },
                createdAt: {
                    field:'dt_atualizacao',
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    field:'dt_atualizacao_nrec',
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
        // const { AlcadaContexto, AlcadaLog, Usuario, AlcadaPoc } = models;
        // this.belongsTo(AlcadaContexto, { foreignKey: 'ContextoId' });
        // this.hasMany(AlcadaLog);
        // this.belongsTo(Usuario);
    }

}

module.exports = Convenio;
