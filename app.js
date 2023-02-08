//require the Mongoose package
const mongoose = require("mongoose");

//connect to MongoDB by specifying port to access MongoDB server
main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);

  await mongoose.connect("mongodb://127.0.0.1/vegetablesDB");

  console.log("Connected");
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
vegetable.save();

// //commented to avoid adding a new apple each time the app is executed.



// // Challenge. Create a new collections for People

// const personSchema = new mongoose.Schema({
//   name: String,

//   age: Number,
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "John",

//   age: "37",
// });

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",

//   score: 10,

//   review: "The best fruit",
// });

// const orange = new Fruit({
//   name: "Orange",

//   score: 4,

//   review: "Too sour for me",
// });

// const banana = new Fruit({
//   name: "Banana",

//   score: 3,

//   review: "Weird texture",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });
