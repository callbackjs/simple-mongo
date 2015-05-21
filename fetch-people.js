var Person = require('./person');

Person.find(function(error, people) {
  if (error) {
    throw error;
  }

  console.log(people);
});
