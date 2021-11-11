'use strict';

const Sequelize = require('sequelize');
const tableName = 'Usuarios';

class Atendimento extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: 'IdUsuario',
                    type: Sequelize.INTEGER,
                    primaryKey:true,
                    autoIncrement:true
                },
                nome: {
                    type: Sequelize.STRING,
                },
                senha: {
                    type: Sequelize.STRING,
                },
                Chave_nrec: {
                    allowNull: false,
                    type: Sequelize.STRING,
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

module.exports = Atendimento;
