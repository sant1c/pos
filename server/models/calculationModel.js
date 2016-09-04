var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var calculationSchema = new Schema({
    _calcid: Schema.Types.ObjectId,
    name: String,
    _userid: Schema.Types.ObjectId,
    _employeeid : Schema.Types.ObjectId,
    _tableid : Schema.Types.ObjectId,
    _bevid : Schema.Types.ObjectId,
    ammount : { type: String, required: true }, 
    date: { type: Date, required: true },
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


var Calculation = mongoose.model('Calculation', calculationSchema);

module.exports = Calculation;