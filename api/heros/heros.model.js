var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstname :{
        type: String,
        unique : false,
        required : true
    },
    lastname : {
        type: String,
        unique : false,
        required : true
    },
    middlename : {
        type: String,
        unique : false,
        required : true
    },
    contact : {
        type: Number,
        unique : false,
        required : true
    },
    Address: {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = userSchema;