import Task from '../model/taskModel.js';


export const createTask = async (req, res) => {
  
  try {
    const task = await Task.create(req.body);
    if (!task) {
      return res.send(400)(res, 'Task could not be created');
    }
    return res.send({ data: { task }, code: 201 });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
  
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.send({ data: { tasks }, code: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const viewTask = async (req, res) => {
  try {
    const task = await Task.findById({
      _id: req.params.id,
    });

    if (!task) {
      return res.status(404).json(res, 'Task not found!.');
    }
    return res.send({ data: { task }, code: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!task) {
      res.status(404).json(res, 'Task not found');
    }
    return res.send({ data: { task }, code: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).json(res, 'Task not found');
    }
    return res.send({ data: 'Task deleted successfully', code: 204 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
