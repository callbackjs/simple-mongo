const Person = require('./person')

const vivek = new Person({
  age: 30,
  name: 'Vivek',
})

vivek.save(error => {
  if (error) {
    throw error
  }

  console.log('Vivek has been saved')
  console.log(vivek)
})
