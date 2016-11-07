const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/person-db')

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person
