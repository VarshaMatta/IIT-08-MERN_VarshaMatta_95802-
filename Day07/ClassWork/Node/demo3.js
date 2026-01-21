//create server by importing http module
//import http module
const http = require(`node:http`);

//create server
const server= http.createServer((req,res)=>{
    console.log(`new request`);
    console.log(`http method ${req.method}`);
    console.log(`http url ${req.url}`);
    res.end(`hello from Node js`);
})

//start server
server.listen(3000,`0.0.0.0`, () =>{
    console.log(`server started on port no 3000`);
});