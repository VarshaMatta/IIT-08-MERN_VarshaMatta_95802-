// importing express
const express=require(`express`);
const userRouter=require(`./routes/user`)
//create express app
const app=express();


//middleware
app.use(express.json());
app.use("/users",userRouter)


//run app
app.listen(3000,`localhost`, ()=>{
    console.log(`Server started on port 3000`)
})