// import express
const express= require(`express`);
const userRoutes = require("./routes/users");
const logger = require("./middleware/logger");

//create express app
const app=express();

//middleware
app.use(express.json());
app.use("/users",userRoutes);
app.use(logger);

//run express app
app.listen(`3000`,`localhost`,()=>{
    console.log(`Server started on port 3000`);
})