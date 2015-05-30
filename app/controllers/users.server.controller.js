// Invoke 'strict' Javascript mode
'use strict';

// Load the 'User' Mongoose model
var User = require('mongoose').model('User');

// Create a new 'create' controller method
exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

// Create a new 'list' controller method
exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if(err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

// Create a new 'read' controller method
exports.read = function(req, res) {
    res.json(req.user);
};

// Create a new 'update' controller method
exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    })
};

// Create a new 'delete' controller method
exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(req.user);
        }
    })

};

// Create a new 'userByID' controller method
exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, function(err, user) {
        if(err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    })
};