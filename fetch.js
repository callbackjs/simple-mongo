const Person = require('./person')

Person.find((error, people) => {
  if (error) {
    throw error
  }

  console.log(people)
})
