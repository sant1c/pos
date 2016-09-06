var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/momoking')
var Schema = mongoose.Schema;

// create a schema
var menuSchema = new Schema({
    _menuid: Schema.Types.ObjectId,
    name: String,
    type: { type: String, required: true },
    price : {type: String, required: true},
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Menu = mongoose.model('Menu', menuSchema);

// create a new user called chris
var list = new Menu({
  name: 'fishoff',
  type: 'truu',
  price: '1234541'
});t


// call the built-in save method to save to the database
list.save(function(err) {
  if (err) throw err;

  console.log('Table saved successfully!');
});