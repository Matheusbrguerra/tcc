const Sequelize = require("sequelize");

const databaseConfig = require("../config/database");
const Usuario = require('../app/models/Usuario')
const Pessoa = require('../app/models/Pessoa')
const Convenio = require('../app/models/Convenio')
const Procedencia = require('../app/models/Procedencia')
const TipoAtendimento = require('../app/models/TipoAtendimento')
const Atendimento = require('../app/models/Atendimento')
const models = [Usuario,Pessoa,Convenio,Procedencia,TipoAtendimento,Atendimento];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();