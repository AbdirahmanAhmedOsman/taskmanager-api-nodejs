const taskRoutes= (req, res)=>{
    if(req.method === 'GET'){
        getTask(req,req);
    }else if(req.method === 'PST'){
        createTask(req,res);
    }else if(req.method === 'PATCH'){
        updateTask(req,e=res);
    }else if(req.method === 'DELETE'){
        deleteTask(req,res);
    }else{
        res.writeHeade(404, 'Data Not Found', {'content-type': 'application/json'})
        res.end(JSON.stringify({
            message :" Unknown Method Required."
        }))
    }
}

module.exports = taskRoutes