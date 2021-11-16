const { Router } = require('express')
const AtendimentoController = require('./app/controllers/AtendimentoController')
const PrescricaoProcedimentoController = require('./app/controllers/PrescricaoProcedimentoController')

const routes = new Router()

routes.get('/atendimentos',AtendimentoController.index)
routes.delete('/atendimentos/:id',AtendimentoController.destroy)

routes.get('/prescricao-procedimento',PrescricaoProcedimentoController.index)
routes.delete('/prescricao-procedimento',PrescricaoProcedimentoController.destroy)

module.exports = routes