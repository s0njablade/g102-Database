const express = require('express')
const queries = require('./queries')

const app = express()
const port = process.env.PORT || 3001



app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})



app.listen(port, () => {
    console.log(`listening on ${port}`)
    
})