var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/momoking')
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'nykhilamatya@gmail.com',
  password: 'amatya' 
});


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});