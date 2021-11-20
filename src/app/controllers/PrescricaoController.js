const Prescricao = require('../models/Prescricao');
const Atendimento = require('../models/Atendimento');
const Pessoa = require('../models/Pessoa');
const Convenio = require('../models/Convenio');
const Procedencia = require('../models/Procedencia');
const TipoAtendimento = require('../models/TipoAtendimento');

class PrescricaoController {
    async index(req, res) {
        try {
            const prescricoes = await Prescricao.findAll({
                include: [{
                    model: Atendimento,
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
                }, {
                    model: Pessoa
                }]
            })
            return res.send(prescricoes)
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async store(req, res) {
        const {
            IdAtendimento,
            IdPessoa,
        } = req.body
        try {
            const objPostagem = {
                IdAtendimento,
                IdPessoa,
                Dt_prescricao:new Date(),
                Dt_liberacao: new Date(),
                Chave_nrec:1,
                Chave:1,
            }
            const prescricao = await Prescricao.create(objPostagem)
            return res.send(prescricao)
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async destroy(req, res) {
        const { id } = req.params
        try {
            await Prescricao.update({
                Dt_suspensao: new Date()
            }, {
                where: {
                    id,
                }
            })
            return res.send({msg:`A Prescrição foi suspendida com sucesso !!`})
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new PrescricaoController();
