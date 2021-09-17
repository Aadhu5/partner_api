const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
        host : "localhost",
        user : "partner_user",
        password : "partner_pass",
        database : "partner_api_db",
        multipleStatements : true
});
mysqlConnection.connect((err)=>{
        if(!err)
        {
                console.log("Connected");
        } else {
                console.log(err);
        }        
});
module.exports = mysqlConnection;