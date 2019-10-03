let connection = require('./connection');

let orm = {
    selectAll: function (table, callBack) {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            callBack(res)
        });
    },
    insertOne: function (table, cols, vals, callBack) {
        let queryString = "INSERT INTO burgers burgerName VALUES ?;";
        connection.query(queryString, val, function (err, res) {
            if (err) throw err;
            callBack(res);
        })
    },
    updateOne: function (table, objColVal, condition, callBack) {
        let queryString = "UPDATE burgers SET";
        queryString += objToSql.objColVal;
        queryString += "WHERE";
        queryString += condition;

        connection.query(queryString, function(err, res){
            if (err) throw err;
            callBack(res);
        })
    }
}



module.exports = orm;