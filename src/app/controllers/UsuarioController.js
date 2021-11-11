const Usuario = require('../models/Usuario');


class UsuarioController {
    async index(req, res) {
        try {
            const { nome } = req.query
            const usuarios = await Usuario.findAll({
                where: {
                    nome,
                }
            })
            return res.send(usuarios)
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new UsuarioController();
