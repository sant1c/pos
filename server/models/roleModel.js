var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var roleSchema = new Schema({
    _roleid: Schema.Types.ObjectId,
    name: String,
    role: { type: String, required: true, unique: true },
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


var Role = mongoose.model('Role', roleSchema);

module.exports = Role;