//require the Mongoose package
const mongoose = require("mongoose");

//Open the connection to MongoDB server
main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);

  await mongoose.connect("mongodb://127.0.0.1/vegetablesDB");

  console.log("Connected to MongoDB server.");
}
//create a Mongoose SCHEMA that sets out the fields each document will have and their datatypes
const vegetableSchema = new mongoose.Schema({
  name: String,

  rating: Number,

  review: String,
});

//create a Mongoose MODEL
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

//create a DOCUMENT
const vegetable = new Vegetable({
  name: "spinach",

  rating: 7,

  review: "Pretty solid as a vegetable.",
});

//save the document
// //commented to avoid adding a new apple each time the app is executed.
// vegetable.save();

// CHALLENGE. Create a new collections for People

//create a Mongoose SCHEMA that sets out the fields each document will have and their datatypes
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//create a Mongoose MODEL
const Person = mongoose.model("Person", personSchema);

//create a DOCUMENT
const person = new Person({
  name: "John",
  age: 37,
});

// save the document
// comment out to avoid adding a John each time the app is executed.
// person.save();

// Add new vegetables
const carrot = new Vegetable({
  name: "carrot",

  score: 10,

  review: "The best vegetable.",
});

const lettuce = new Vegetable({
  name: "lettuce",

  score: 4,

  review: "Too plain for me.",
});

const radish = new Vegetable({
  name: "radish",

  score: 3,

  review: "Too spicy.",
});

// Save 3 new vegetables
// comment out to avoid adding these fruits each time the app is executed.
// Vegetable.insertMany([carrot, lettuce, radish], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the vegetables to vegetablesDB.");
//   }
// });

// Reading from your database with Mongoose:
Vegetable.find(function (err, vegetables) {
  if (err) {
    console.log(err);
  } else {
    // console.log(vegetables);

    // Close the connection to MongoDB server when it is done with the task.
    mongoose.connection.close();

    // CHALLENGE: Use the for each loop to loop through the array of vegetables and only long their names.
    vegetables.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

