// 3 steps to updating a person
// 1. Retrieve the person object
// 2. Actually perform the updates
// 3. Save the person
var Person = require('./person');

Person.find({ age: 30 }, function(error, people) {
  if (error) {
    throw error;
  }

  people.forEach(function(person) {
    person.name = "Vivek Nair";
    person.save(function(error) {
      if (error) {
        throw error;
      }

      console.log('Updated person', person);
    });
  });
});
