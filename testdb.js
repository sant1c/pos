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


var Table = mongoose.model('Table', tableSchema);

// create a new user called chris
for(var i=0; i<5; i++){
var list = new Table({
  name: 'fishoff'+i.toString(),
  table: 'truu'+i.toString()
});


// call the built-in save method to save to the database
list.save(function(err) {
  if (err) throw err;

  console.log('Table saved successfully!');
});
}