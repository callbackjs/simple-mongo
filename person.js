var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/person-db');

var personSchema = mongoose.Schema({
  name: String,
  age: Number
});

var Person = mongoose.model('Person', personSchema);
module.exports = Person;
