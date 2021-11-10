const express = require('express')
const app = express()


app.use(express.json())

require('./routes')(app)
app.get('/', (req, res) => res.status(200).send('Hello World'))

app.use('/v2/docs', express.static('src/views'))
app.listen(3000)