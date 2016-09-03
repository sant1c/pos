var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bevregeSchema = new Schema({
    _bevid: Schema.Types.ObjectId,
    name: String,
    bevname: { type: String, required: true, unique: true },
    price : {type: String, required: true},
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


var Bevrege = mongoose.model('Bevrege', bevregeSchema);

module.exports = Bevrege;