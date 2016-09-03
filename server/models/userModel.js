var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    _userid: Schema.Types.ObjectId,
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    _roleid: Schema.Types.ObjectId,
    status : Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


var User = mongoose.model('User', userSchema);

module.exports = User;