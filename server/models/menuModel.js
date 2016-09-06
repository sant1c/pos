var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var menuSchema = new Schema({
    _menuid: Schema.Types.ObjectId,
    name: String,
    type: { type: String, required: true, unique: true },
    price : {type: String, required: true},
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


var Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;