const express = require('express')
const app = express()

// Módulo que contém as rotas necessárias da aplicação.
const routes = require('./routes')

// O host que irá hospedar a aplicação.
const host = '127.0.0.1'

// A porta em que a aplicação será executada.
const port = 3000

// Permite que a aplicação possa ler arquivos JSON.
app.use(express.json())

// Permite que a aplicação possa utilizar as rotas pré-estabelecidas.
app.use(routes)

// Inicia o servidor da aplicação.
app.listen(port, host, () => { console.log(`Executando servidor na porta ${port}`) })