const Procedimento = require('../models/Procedimento');

class ProcedimentoController {
    async index(req, res) {
        try {
            const procedimentos = await Procedimento.findAll({
               attributes:['id','nome']
            })
            return res.send(procedimentos)
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new ProcedimentoController();