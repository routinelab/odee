// Invoke 'strict' Javascript mode
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    userid: String,
    password: String,
    role: String,
    created: Date
});

mongoose.model('User', UserSchema);
