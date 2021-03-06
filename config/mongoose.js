// Invoke 'strict' Javascript mode
'use strict';

// Load the module dependencies
var config = require('./config'),
    mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {

    // Use Mongoose to connect to MongoDB
    var mongo = mongoose.connect(config.mongo);

    // Load the 'User' model
    require('../app/models/user.server.model');

    // Return the Mongoose connection instance
    return mongo;

};