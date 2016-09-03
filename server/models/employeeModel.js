var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var employeeSchema = new Schema({
    _employeeid: Schema.Types.ObjectId,
    name: String,
    empname: { type: String, required: true, unique: true },
    designation: { type: String, required: true },
    joinedDate: { type: Date, required: true },
    resignDate: Date,
    status: Boolean,
    address: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;