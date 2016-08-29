var oracledb = require('oracledb');
var connectionOptions = require('../config/connection');
var userQuery = require('../dbQueries/users');

module.exports = function(req, res) {
    oracledb.getConnection(connectionOptions, function(err, connection) {
        if (err) { 
            console.error(err.message); 
            return; 
        }
        
        userQuery.getUsers(connection, function(err, result)
        {
            if (err) { console.error(err.message); return; }
            console.log(result.rows);
            res.render('users', { users: result.rows })
        });
    });
}
