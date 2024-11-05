const {IncomingForm} = require('formidable');
const { readTasksFromFile } = require("../utils/fileHandler")

exports.getTasks=(req,res)=>{
    const tasks= readTasksFromFile();
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))
}

exports.createTask =(req, res)=>{
    const form= new IncomingForm();
    form.parse(req, (err, fields, files)=>{
        if(err){
            res.writeHead(404, {'content-type': 'application/json'})
            res.end(JSON.stringify({
                message : 'Error parsinf form'
            }))
            return;
        }
        const tasks = readTasksFromFile();
        const newTask ={
            id: Date.now(),
            title : fields.title,
            description : fields.description || "",
            status : fields.status || 'pending',
            image: files.image? `/uploads/${files.image.name}`
        }
    })

}