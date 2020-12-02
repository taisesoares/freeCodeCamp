require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const Schema = mongoose.Schema

let Person;


const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
})

Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const newPerson = new Person({ name: 'Taise', age: 30, favoriteFoods: ['Mexican', 'Pizza'] })

  newPerson.save(function(err, data) {
    if (err) return console.error(err)
    done(null, data);
  })
};

let arrayOfPeople = [
  { name: 'Taise', age: 30, favoriteFoods: ['Mexican', 'Pizza'] },
  { name: 'Jessica', age: 28, favoriteFoods: ['Japanese', 'Pizza'] },
  { name: 'Arthur', age: 5, favoriteFoods: ['Cookies', 'snacks'] }
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err)
    done(null, data);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function(err, data) {
    if (err) return console.error(err)
    done(null, data);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function(err, data) {
    if (err) return console.error(err)
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, function(err, data) {
    if (err) return console.error(err)
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
