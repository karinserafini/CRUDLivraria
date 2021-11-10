const cliente = require('./clientes');
const livro = require('./livros');


module.exports = (app) => {
    cliente(app)
    livro(app)
    
}