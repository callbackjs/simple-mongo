var Person = require('./person');

var vivek = new Person({
  age: 30,
  name: "Vivek"
});

vivek.save(function(error) {
  if (error) {
    throw error;
  }

  console.log('Vivek has been saved');
  console.log(vivek);
});
