/* INSTRUCTOR ONLY (18.3.02)
 *
 * Example model
 * ===================================== */

// First, we hook mongoose into the model with a require
var mongoose = require("mongoose");

// Then, we save the mongoose.Schema class as simply "Schema"
var Schema = mongoose.Schema;

// With our new Schema class, we instantiate an ExampleSchema object
// This is where we decide how our data must look before we accept it in the server, and how to format it in mongoDB
var NewsSchema = new Schema({
  // string must be a string. We "trim" it to remove any trailing white space
  // Notice that it is required, as well. It must be entered or else mongoose will throw an error
  string: {
    type: String,
    trim: true,
  },
  // This must be a unique number in the collection, and it must be entered
  number: {
    type: Number,
    unique: true,
  },
  
  // boolean must be a boolean
  boolean: Boolean,
  // array must be an array
  array: Array,
  // date must be a date. The default is the current date
  date: {
    type: Date,
    default: Date.now
  },
  // Notice the validate array in this sub-object
  // This lets us make customized validation functions for our model
  
});

// This creates our model from the above schema, using mongoose's model method
var scrapedNews = mongoose.model("scrapedNews", NewsSchema);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = scrapedNews;
