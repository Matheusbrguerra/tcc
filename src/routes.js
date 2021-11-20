const { Router } = require('express')
const AtendimentoController = require('./app/controllers/AtendimentoController')
const PrescricaoProcedimentoController = require('./app/controllers/PrescricaoProcedimentoController')
const PrescricaoController = require('./app/controllers/PrescricaoController')

const routes = new Router()

routes.get('/atendimentos',AtendimentoController.index)
routes.delete('/atendimentos/:id',AtendimentoController.destroy)

routes.get('/prescricao-procedimento',PrescricaoProcedimentoController.index)
routes.delete('/prescricao-procedimento',PrescricaoProcedimentoController.destroy)

routes.get('/prescricoes',PrescricaoController.index)
routes.post('/prescricoes',PrescricaoController.store)
routes.delete('/prescricoes/:id',PrescricaoController.destroy)

module.exports = routes