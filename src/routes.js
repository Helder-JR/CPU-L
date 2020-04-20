const Router = require('express')

// Função que expões as funções dos métodos HTTP necessários para acessar as
// rotas da aplicação.
const routes = Router()

// Função que cria um objeto referente a um processador através do corpo da
// requisição e o salva no banco de dados da aplicação.
routes.post('/processors', (req, res) =>
{
    const processor = req.body

    console.log(processors)

    res.status(201)
    res.json({ vendor: processor.vendor, inserted: true })
})

// Exposição do módulo de rotas da aplicação.
module.exports = routes