const getalltasks=(req,res)=>{
    res.send('all items')
}
const createtask=(req,res)=>{
    res.json(req.body)
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