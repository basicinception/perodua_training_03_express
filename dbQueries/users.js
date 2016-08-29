module.exports = {
    getUsers: function(connection, cb) {
        connection.execute(
            "SELECT name FROM users ",
        cb)
    }
}