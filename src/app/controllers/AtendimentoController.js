const Atendimento = require('../models/Atendimento');
const Pessoa = require('../models/Pessoa');
const Convenio = require('../models/Convenio');
const Procedencia = require('../models/Procedencia');
const TipoAtendimento = require('../models/TipoAtendimento');

class AtendimentoController {
    async index(req, res) {
        try {
            const atendimentos = await Atendimento.findAll({
                include: [
                    {
                        model: Pessoa
                    },
                    {
                        model: Convenio
                    },
                    {
                        model: Procedencia
                    },
                    {
                        model: TipoAtendimento
                    },
                ]
            })
            return res.send(atendimentos)
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async destroy(req, res) {
        const { id } = req.params
        try {
            await Atendimento.update({
                Dt_cancelamento: new Date()
            }, {
                where: {
                    id,
                }
            })
            return res.send({msg:`O Atendimento foi excluído com sucesso !!`})
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new AtendimentoController();
