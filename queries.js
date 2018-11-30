const db = require('./database-connections')


module.exports = {
    getAll(){
        return db('students')
    },
    getById(id){
        return db('students'). where('id', id)
    }
}