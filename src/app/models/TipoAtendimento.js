'use strict';

const Sequelize = require('sequelize');
const tableName = 'TipoAtendimento';

class TipoAtendimento extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: 'IdTipoAtend',
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                Nome: {
                    type: Sequelize.STRING,
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
                    field: 'Dt_atualizacao',
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    field: 'Dt_atualizacao_nrec',
                    allowNull: false,
                    type: Sequelize.DATE,
                }
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

module.exports = TipoAtendimento;