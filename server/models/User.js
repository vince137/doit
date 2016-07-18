var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: { type: String, index: true, unique: true, required: true  },
    password: String
}, { strict: true });

// Define for the scope
var User = mongoose.model('User', UserSchema);

// Model methods
User.methods = {};
User.methods.findByEmail = function(email) {
    var query = User.findOne({email: email})
    return query;
}

// Return the model
module.exports = User;