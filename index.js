const db = require('../config/database')

let Person = require('./modules/person')
let Category = require('./modules/category')

db.sync({force: true})

// Person.sync({force: true})
// Category.sync({force: true})

