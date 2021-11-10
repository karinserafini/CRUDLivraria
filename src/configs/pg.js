const {Pool} = require ('pg')


const pool = new Pool({
    user: 'karin',
    host: 'localhost',
    database: 'zetta',
    password: '123456',
    port: 5432
})


module.exports = {query: (text, params) => pool.query(text, params)}