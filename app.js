//require the Mongoose package
const mongoose = require('mongoose');
 
//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://localhost:27017/VegetablesDB');
  }
 
//create a Mongoose SCHEMA that sets out the fields each document will have and their datatypes
const vegetableSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
	review: String
})
 
//create a Mongoose MODEL
const Vegetable = new mongoose.model ("Vegetable", vegetableSchema);
 
//create a DOCUMENT
const vegetable = new Vegetable ({
	name: "spinach",
	rating: 7,
	review: "Great! Tastes good in salad."
});
 
//save the document
vegetable.save()
 
// //**CHALLENGE: Set up a people database with one document and two fields**//
// //create a SCHEMA
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });
 
// //create a MODEL
// const Person = mongoose.model('Person', personSchema);
 
// //create a DOCUMENT
// const person = new Person({
//   name: "John",
//   age: 37
// });
 
// //Save it
// person.save();