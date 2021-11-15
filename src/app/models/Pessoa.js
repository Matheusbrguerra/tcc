'use strict';

const Sequelize = require('sequelize');
const tableName = 'Pessoas';

class Pessoa extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: 'IdPessoa',
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                nome: {
                    type: Sequelize.STRING,
                },
                idade: {
                    type: Sequelize.INTEGER,
                },
                cpf: {
                    type: Sequelize.INTEGER,
                },
                prontuario: {
                    type: Sequelize.INTEGER,
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
        // const { AlcadaContexto, AlcadaLog, Usuario, AlcadaPoc } = models;
        // this.belongsTo(AlcadaContexto, { foreignKey: 'ContextoId' });
        // this.hasMany(AlcadaLog);
        // this.belongsTo(Usuario);
    }

}

module.exports = Pessoa;
