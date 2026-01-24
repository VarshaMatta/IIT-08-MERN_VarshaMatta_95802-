//import http module
const http = require(`node:http`);

//create server
const server = http.createServer((req,res)=>{
    if(req.method=="GET"){
        console.log("GET request received");
    }
    else if(req.method=="POST"){
      console.log("POST request received");  
    }
    else if (req.method === "PUT") {
        console.log("PUT request received");
    }
    else if (req.method === "DELETE") {
        console.log("DELETE request received");
        res.end("DELETE request handled");
    }
    else {
        console.log("Unknown request");
    }
});


//start server
server.listen(`3000`,`localhost`,()=>{
    console.log("Server running on port 3000")
}
);