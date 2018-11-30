const express = require('express')
const queries = require('./queries')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    queries.getAll().then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
    
})
