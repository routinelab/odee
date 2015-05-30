// Invoke 'strict' Javascript mode
'use strict';

// Load the 'users' controller
var users = require('../controllers/users.server.controller');

// Define the routes module' method
module.exports = function(app) {

    // Set up the 'signon' base routes
    app.route('/users')
        .post(users.create)
        .get(users.list);

    // Set up the 'login/userId' parameterized routes
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    // Set up the 'userId' parameter middleware
    app.param('userId', users.userByID);
};
