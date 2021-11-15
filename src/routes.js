const { Router } = require('express')
const AtendimentoController = require('./app/controllers/AtendimentoController')

const routes = new Router()

routes.get('/atendimentos',AtendimentoController.index)
routes.delete('/atendimentos/:id',AtendimentoController.destroy)

module.exports = routes