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
  // add data validation make the name required
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  // add data validation so that the rating is between 1 and 10
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },

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

// Reading from your database with Mongoose:
Vegetable.find(function (err, vegetables) {
  if (err) {
    console.log(err);
  } else {
    // console.log(vegetables);

    // Close the connection to MongoDB server when it is done with the task.
    mongoose.connection.close();

    // CHALLENGE: Use the for each loop to loop through the array of vegetables and only long their names.
    vegetables.forEach(function (vegetable) {
      console.log(vegetable.name);
    });
  }
});

// Update an entry (example celery entry did not have a name)
Vegetable.updateOne(
  { _id: "63e32eb6d20142f5074afcb3" },
  { name: "celery" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated the document.");
    }
  }
);
