const mysql = require("mysql");
/*var mysqlConnection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "",
        database : "partner_5",
        multipleStatements : true
}); */
var mysqlConnection = mysql.createConnection({
        host : "localhost",
        user : "admin",
        password : "0bf21657ee60f102b7fc57068038c74a266fc88c1071c8e4",
        database : "partner_api_db",
        multipleStatements : true
});

/*var mysqlConnection = mysql.createConnection({
        host : "143.244.141.118",
        user : "server_app",
        password : "0a86fef948494bae11c9557f8827db763d66acd4f62b4dce",
        database : "partner_api_db",
        port : 3306,
        multipleStatements:true,
        queryTimeout: 66000,
        connectTimeout: 66000
}); */

/*var mysqlConnection = mysql.createConnection({ 
        host : "my-db-part-do-user-9740444-0.b.db.ondigitalocean.com",
        user : "doadmin",
        password : "JaPXrhHYtbsmHKqz",
        database : "defaultdb",
        port : "25060"
}); */

mysqlConnection.connect((err)=>{
        if(!err)
        {
                console.log("Connected");
        } else {
                console.log(err);
        }        
});
module.exports = mysqlConnection;