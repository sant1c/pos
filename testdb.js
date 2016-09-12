var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/momoking')
var Schema = mongoose.Schema;

// create a schema
var calculationSchema = new Schema({

    _calcid: Schema.Types.ObjectId,
    tableno: String,
    description: String,
    date: Date,
    total: Number,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


var Table = mongoose.model('Calculation', calculationSchema);

// create a new user called chris
var list = new Table({
  tableno: 'Table1',
  description: 'asdadad',
  date: '2016-02-10'
  
});


// call the built-in save method to save to the database
list.save(function(err) {
  if (err) throw err;

  console.log('Table saved successfully!');
});
