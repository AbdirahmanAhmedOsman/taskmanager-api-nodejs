const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const hostname= 'localhost';
const port = 9000

const server = http.createServer((req,res) =>{
    if(req.url.startsWith('/tasks')){
        taskRoutes(req,res)
    }else{
        res.writeHead(404,'No tFound',{'content-type': 'application/json'})
        res.end(JSON.stringify({
            message:"Sorry you got lost"
        }))
    }

});

server.listen(port,hostname, ()=>{
    console.log(`Server running on port ${port}`)
})