var mongoose = require('mongoose');
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


var Calculation = mongoose.model('Calculation', calculationSchema);

module.exports = Calculation;