const models = require('../models/index')

const clienteController = {}

clienteController.getClientes = async (req,res) => {
    let resp = await models.cliente.findAll()
    res.send(resp)
}

module.exports = clienteController