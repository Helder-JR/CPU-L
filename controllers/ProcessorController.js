const data = require('../src/state')

const processorsPath = 'database/processors.json'

module.exports = {

    create(req, res)
    {
        const { vendor, model, numCores, numThreads, baseClock, turboClock, tdp, cache } = req.body
        const processor = { vendor, model, numCores, numThreads, baseClock, turboClock, tdp, cache }

        data.save(processor, processorsPath)

        res.status(201)
        res.json({ inserted: true })
    },

    index(req, res)
    {
        const processors = data.load(processorsPath)
        res.header('X-Total-Count', processors.length)
        
        res.status(200)
        res.json(processors)
    },
    
    pick(req, res)
    {
        const { id } = req.params
        
        const processors = data.load(processorsPath)

        if (id > processors.length) res.status(404)
        
        res.json(processors[id - 1])
    },
    
    delete(req, res)
    {
        const { id } = req.params
        
        if (id < 0) res.json({ error: 'Índice inválido.' })

        const processors = data.load(processorsPath)

        res.send(processors[id])
    }
}