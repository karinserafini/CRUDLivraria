




const clienteController = require('../controllers/clientes')

module.exports = (app) => {
    app.get('/clientes', clienteController.getCliente)
    app.post('/clientes', clienteController.postCliente)
    app.delete('/clientes/:id', clienteController.deleteCliente)
    app.patch('/clientes/:id', clienteController.patchCliente)
}




