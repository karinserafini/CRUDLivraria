const livro = require('../routes/livros')
let livroService = require('../services/livros')

const getLivro = async(req, res, next) => {
    try {
        await livroService.getLivro()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch (err) {
        next(err);
    }
}

    const postLivro = async (req, res, next) => {
        try {
            
            await livroService.postLivro(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err.message))
        }catch(err) {
            next (err);
        }
    }
    
    const deleteLivro = async (req, res, next) => {
        try {
            await livroService.deleteLivro(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
        } catch(err){
            next(err);
        }
    }
    
    const patchLivro = async (req, res, next) => {
        try {
            let params = req.body
            params.id = req.params.id
            await livroService.patchLivro(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
        }catch(err){
            next(err);
        }
    }

module.exports.getLivro = getLivro
module.exports.postLivro = postLivro
module.exports.deleteLivro = deleteLivro
module.exports.patchLivro = patchLivro