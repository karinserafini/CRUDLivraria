const livroController = require('../controllers/livros')

module.exports = (app) => {
    app.get('/livros', livroController.getLivro)
    app.post('/livros', livroController.postLivro)
    app.delete('/livros/:id', livroController.deleteLivro)
    app.patch('/livros/:id', livroController.patchLivro)
}