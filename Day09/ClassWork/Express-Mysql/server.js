// importing
const express= require(`express`)
const studentRouter=require(`./routes/students`)
//create app
const app=express();

//middleware
app.use(express.json())
app.use("/students",studentRouter)

//run the app
app.listen(3000, `localhost`, () =>{
    console.log(`Server started on port 3000`)
})