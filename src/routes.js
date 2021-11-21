const { Router } = require('express')
const AtendimentoController = require('./app/controllers/AtendimentoController')
const PrescricaoProcedimentoController = require('./app/controllers/PrescricaoProcedimentoController')
const PrescricaoController = require('./app/controllers/PrescricaoController')
const PessoasController = require('./app/controllers/PessoasController')
const ProcedimentoController = require('./app/controllers/ProcedimentoController')

const routes = new Router()

routes.get('/atendimentos',AtendimentoController.index)
routes.delete('/atendimentos/:id',AtendimentoController.destroy)

routes.get('/prescricao/:id/procedimentos',PrescricaoProcedimentoController.index)
routes.post('/prescricao-procedimento',PrescricaoProcedimentoController.store)
routes.delete('/prescricao-procedimento',PrescricaoProcedimentoController.destroy)

routes.get('/prescricoes/atendimento/:id',PrescricaoController.index)
routes.post('/prescricoes',PrescricaoController.store)
routes.delete('/prescricoes/:id',PrescricaoController.destroy)

routes.get('/pessoas',PessoasController.index)

routes.get('/procedimentos',ProcedimentoController.index)

module.exports = routes