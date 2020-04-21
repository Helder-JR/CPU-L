const fs = require('fs')

module.exports = {

    // Salva um objeto em um arquivo JSON. Caso o arquivo não exista então um
    // novo será criado. Caso já exista terá seu conteúdo atualizado e gravado
    // novamente.
    save(content, filePath)
    {
        let json = {}

        if (!fs.existsSync(filePath))
        {
            json.table = []
            json.table.push(content)
        }
        else
        {
            const file = fs.readFileSync(filePath, 'utf-8')
            json = JSON.parse(file)
            json.table.push(content)
        }

        const data = JSON.stringify(json)

        fs.writeFileSync(filePath, data, 'utf-8')
    },

    // Carrega um arquivo JSON e o transforma em um objeto a ser retornado pela
    // função.
    load(filePath)
    {
        const file = fs.readFileSync(filePath, 'utf-8')
        const object = JSON.parse(file).table
        
        return object
    },
    
    delete(id, filePath)
    {
        const file = fs.readFileSync(filePath, 'utf-8')
        const object = JSON.parse(file).table

    }
}