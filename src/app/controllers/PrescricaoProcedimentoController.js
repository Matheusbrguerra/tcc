const Prescricao = require('../models/Prescricao');
const StatusExec = require('../models/StatusExec');
const Procedimento = require('../models/Procedimento');
const PrescricaoProcedimento = require('../models/PrescricaoProcedimento');

class PrescricaoProcedimentoController {
    async index(req, res) {
        try {
            const prescrProcs = await PrescricaoProcedimento.findAll({
                include:[{
                    model:StatusExec
                },{
                    model:Procedimento
                },{
                    model:Prescricao
                }]
            })
            return res.send(prescrProcs)
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async destroy(req, res) {
        const { IdParam,IdPrescricao } = req.query
        try {
            const { id } = (await StatusExec.findOne({
                attributes:['id'],
                where:{
                    Nome:'Suspenso'
                }
            }))
            await PrescricaoProcedimento.update({
                IdStatusExec:id,
                Dt_suspensao: new Date()
            }, {
                where: {
                    id:IdParam,
                    IdPrescricao
                }
            })
            return res.send({
                msg:`O procedimento foi excluído com sucesso !!`
            })
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new PrescricaoProcedimentoController();
