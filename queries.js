const database = require('./database-connections')

module.exports = {
    listAll(){
        return database('students')
    }
}