const express = require('express')
const app = express()
const cors = require('cors')

// Necessário para carregar as variáveis de ambiente da aplicação.
require('dotenv').config()

// Módulo que contém as rotas necessárias da aplicação.
const routes = require('./routes')

// Permite que a aplicação possa ler arquivos JSON.
app.use(express.json())

// Permite que a aplicação possa utilizar as rotas pré-estabelecidas.
app.use(routes)

// Evita que sites maliciosos se passem por essa aplicação, limitando os
// domínios que podem fazer usos das rotas pré-estabelecidas.
app.use(cors())

// Inicia o servidor da aplicação.
app.listen(process.env.PORT, process.env.HOST,() =>
{ console.log(`Executando servidor na porta ${process.env.PORT}.`) })