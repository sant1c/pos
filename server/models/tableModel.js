var mongoose = require('mongoose');
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

module.exports = Table;