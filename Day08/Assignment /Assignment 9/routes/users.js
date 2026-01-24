//importing
const express = require(`express`)
const pool = require(`../db/pool`)
const result = require(`../utils/result`)

//create router
const router  = express.Router();

//routes
// get all new user
router.get("/",(req,res) => {
    const sql = `select * from users`;
    pool.query(sql,(error,data) =>{
        res.send(result.createResult(error,data))
    })
})

//2. Add new user
router.post("/",(req,res)=>{
    //Destructuring
    const { first_name, last_name, email, phone} = req.body;
    const sql = `insert into users( first_name, last_name, email, phone) values(?,?,?,?)`
        pool.query(sql,[first_name, last_name, email, phone],(error,data) =>{
        res.send(result.createResult(error,data))
    })
})



//export router
module.exports = router;