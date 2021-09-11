const mysql = require("mysql");
/*var mysqlConnection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "",
        database : "partner_5",
        multipleStatements : true
}); */
var mysqlConnection = mysql.createConnection({
        host : "partner-db-do-user-9740444-0.b.db.ondigitalocean.com",
        user : "doadmin",
        password : "KAla7QPL-vRVwdtj",
        database : "defaultdb",
        multipleStatements : true,
        sslmode = 'REQUIRED'
});

mysqlConnection.connect((err)=>{
        if(!err)
        {
                //console.log("Connected");
        } else {
                //console.log("Connection failed");
        }        
});
module.exports = mysqlConnection;