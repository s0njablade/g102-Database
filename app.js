const express = require('express')
const queries = require('./queries')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())

app.get('/', (req, res) => {
    queries.getAll().then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})

app.delete('/:id', (req, res) => {
    queries.deleteStudent(req.params.id).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    queries.updateStudent(req.params.id, req.body).then(updatedStudent => res.json(updatedStudent))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
    
})
