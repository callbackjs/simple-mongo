var Person = require('./person');

Person.remove(function(error) {
  if (error) {
    throw error;
  }

  console.log('Deleted people');
});
