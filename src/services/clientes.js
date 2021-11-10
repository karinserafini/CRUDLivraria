const db = require ('../configs/pg')

const sql_get =
    ` select id,
    codigo,
    nome,
    cpf,
    endereco,
    cep from cliente`

const getCliente = async() => {
    let cliente = {}
        await db.query(sql_get)
            .then(ret => cliente = {total: ret.rows.length, cliente: ret.rows})
            .catch(err => cliente = err.stack)
            return cliente
    }

const sql_insert = 
    `insert into cliente (id, codigo, nome, cpf, endereco, cep)
            values($1, $2 ,$3, $4, $5, $6)`


const postCliente = async (params) => {
    console.log(params);
    const {id, codigo, nome, cpf, endereco, cep} = params
    await db.query(sql_insert, [id, codigo, nome, cpf, endereco, cep])
}

const sql_delete = 
    `delete from cliente
        where id = $1`

const deleteCliente = async(params) => {
    const {id} = params
    await db.query(sql_delete, [id])
}

const sql_patch = 
    `update cliente
        set `
        //id, codigo, nome, cpf, endereco, cep
        const patchCliente = async(params) => {
            let fields = ''
            let binds = []
            binds.push(params.id)
            let countParams = 1
            if (params.codigo) {
                countParams ++
                fields += ` codigo = $${countParams}`
                binds.push(params.codigo)
            }
            if (params.nome){
                countParams ++
                fields += (fields?',' : '') + ` nome = $${countParams}`
                binds.push(params.nome)
            }
            if(params.cpf){
                countParams ++
                fields += (fields?',' : '') + ` cpf= $${countParams}`
                binds.push(params.cpf)
            }
            if(params.endereco){
                countParams ++
                fields += (fields?',' : '') + ` endereco = $${countParams}`
                binds.push(params.endereco)
            }
            if(params.cep){
                countParams ++
                fields += (fields?',' : '') + ` cep = $${countParams}`
                binds.push(params.cep)
            }
            let sql = sql_patch + fields + 'where id = $1 '
            return await db.query(sql, binds)
        
        }
    

module.exports.getCliente = getCliente
module.exports.postCliente = postCliente
module.exports.deleteCliente = deleteCliente
module.exports.patchCliente = patchCliente
