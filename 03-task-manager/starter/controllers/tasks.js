const Task = require("../modles/Task");

const getalltasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createtask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const gettask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with ID: ${task}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updatetask = async (req, res) => {
  try {
    const {id: taskID}=req.params

const task =await Task.findByIdAndUpdate({_id:taskID}, req.body,{
  new : true,
  runValidators : true,
})
if(!taks){
  return res.status(404).json({msg:`no task with this id: ${task}`})
}
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deletetask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with ID: ${task}` });
    }
    res.status(200).json({ task : null , status:'Success'})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getalltasks,
  createtask,
  gettask,
  updatetask,
  deletetask,
};
