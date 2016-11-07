const Person = require('./person')

Person.remove(error => {
  if (error) {
    throw error
  }

  console.log('Deleted people')
})
