const express = require('express')
const app = express()
app.use(express.json())

const { dbConnection } = require('./config/config')

app.use(express.json())
dbConnection()


app.use ('/products', require('./routes/products'))

const PORT = 3001
app.listen(PORT, () => console.log (`Servidor levantado en el puerto ${PORT}`))