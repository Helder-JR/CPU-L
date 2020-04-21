const Router = require('express')

const ProcessorController = require('../controllers/ProcessorController')

// Expões as funções dos métodos HTTP necessários para acessar as rotas
// da aplicação.
const routes = Router()

// Cria um objeto referente a um processador através do corpo da requisição
// e o salva no banco de dados da aplicação.
routes.post('/processors', ProcessorController.create)

// Recupera a lista dos processadores presente no banco de dados.
routes.get('/processors', ProcessorController.index)

// Acessa as informações de um processador no banco de dados.
routes.get('/processors/:id', ProcessorController.pick)

// Deleta um processador presente no banco de dados.
routes.delete('/processors/:id', ProcessorController.delete)

// Exposição do módulo de rotas da aplicação.
module.exports = routes