const db = require('../configs/pg')

console.log('funcinou');

const sql_get =
    ` select id,
    titulo,
    descricao,
    autor,
    ano from livros`

const getLivro = async () => {
    let livro = {}
    await db.query(sql_get)
        .then(ret => livro = { total: ret.rows.length, livro: ret.rows })
        .catch(err => livro.err.stack)
    return livro
}

const sql_insert =
    `insert into livros (id, titulo, descricao, autor, ano)
            values($1, $2 ,$3, $4, $5)`


const postLivro = async (params) => {

    const { id, titulo, descricao, autor, ano } = params
    await db.query(sql_insert, [id, titulo, descricao, autor, ano])
}

const sql_delete =
    `delete from livros
        where id = $1`

const deleteLivro = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

const sql_patch =
    `update livros
        set `
        //id, titulo, descricao, autor, ano
const patchLivro = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1

    if (params.titulo) {
        countParams++
        fields += ` titulo = $${countParams}`
        binds.push(params.titulo)
    }
    if (params.descricao) {
        countParams++
        fields += (fields ? ',' : '') + ` descricao = $${countParams}`
        binds.push(params.descricao)
    }
    if (params.autor) {
        countParams++
        fields += (fields ? ',' : '') + ` autor = $${countParams}`
        binds.push(params.autor)
    }
    if (params.ano) {
        countParams++
        fields += (fields ? ',' : '') + ` ano = $${countParams}`
        binds.push(params.ano)
    }
    
    let sql = sql_patch + fields + 'where id = $1 '
    return await db.query(sql, binds)

}

module.exports.getLivro = getLivro
module.exports.postLivro = postLivro
module.exports.deleteLivro = deleteLivro
module.exports.patchLivro = patchLivro