const Pessoa = require('../models/Pessoa');

class PessoaController {
    async index(req, res) {
        try {
            const pessoas = await Pessoa.findAll({
               attributes:['id','nome']
            })
            return res.send(pessoas)
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new PessoaController();