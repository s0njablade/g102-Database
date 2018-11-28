const express = require('express')

const app = express()
const port = process.env.PORT || 3001



app.get('/', (req, res) => {
    res.send('hooray i work')
})



app.listen(port, () => {
    console.log(`listening on ${port}`)
    
})