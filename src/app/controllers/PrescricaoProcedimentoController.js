const Prescricao = require('../models/Prescricao');
const StatusExec = require('../models/StatusExec');
const Procedimento = require('../models/Procedimento');
const PrescricaoProcedimento = require('../models/PrescricaoProcedimento');
const Atendimento = require('../models/Atendimento');

class PrescricaoProcedimentoController {
    async index(req, res) {
        const {id} = req.params
        try {
            const prescrProcs = await PrescricaoProcedimento.findAll({
                where:{
                    IdPrescricao:id
                },
                include:[{
                    model:StatusExec
                },{
                    model:Procedimento
                },{
                    model:Prescricao,
                    include:[{
                        model:Atendimento
                    }]
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
                msg:`O procedimento foi suspenso com sucesso !!`
            })
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async store(req,res){
        const {IdProc,IdPresc} = req.body
        try {
            const objPostagem = {
                IdPrescrProc:1,
                IdProcedimento:IdProc,
                IdStatusExec:1,
                IdPrescricao: IdPresc,
                Dt_liberacao: new Date(),
                Dt_resultado: new Date(),
                Dt_suspensao: null,
                Chave: 1,
                Chave_nrec: 1
            }
            const procedimentoPrescr = await PrescricaoProcedimento.create(objPostagem)
            return res.status(200).send(procedimentoPrescr);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

}
module.exports = new PrescricaoProcedimentoController();
