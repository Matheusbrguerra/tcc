const { Router } = require('express')
const UsuarioController = require('./app/controllers/UsuarioController')

const routes = new Router()

routes.get('/users',UsuarioController.index)

module.exports = routes