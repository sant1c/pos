var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/momoking')
var Schema = mongoose.Schema;

// create a schema
var tableSchema = new Schema({
    _tableid: Schema.Types.ObjectId,
    name: String,
    table: { type: String, required: true, unique: true },
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Table = mongoose.model('Table', tableSchema);

// create a new user called chris
var Table1 = new Table({
  name: 'Table1',
  table: 'Table1'
});


// call the built-in save method to save to the database
Table1.save(function(err) {
  if (err) throw err;

  console.log('Table saved successfully!');
});