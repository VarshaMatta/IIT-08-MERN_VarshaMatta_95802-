//importing mysql2
const mysql= require(`mysql2`);

//create pool connection
const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"internship_db"
});

//exporting module
module.exports=pool;
