const Task = require('../modles/Task')
const getalltasks=(req,res)=>{
    res.send('all items')
}
const createtask=async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({ task })
}
const gettask=(req,res)=>{
    res.json({id:req.params.id})
}
const updatetask=(req,res)=>{
    res.send('update task')
}
const deletetask=(req,res)=>{
    res.send('delete task')
}

module.exports={
    getalltasks,createtask,gettask,updatetask,deletetask
}