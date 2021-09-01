import express from 'express';
const router = express.Router();

import { 
  createTask, 
  getAllTasks, 
  viewTask, 
  updateTask, 
  deleteTask, 
} from '../controllers/taskControllers.js';

import { validateCreateTask, validateUpdateTask } from '../middleware/taskMiddleware.js';

router.post('/', validateCreateTask,  createTask);
router.get('/', getAllTasks);
router.get('/:id', viewTask);
router.put('/:id', validateUpdateTask, updateTask);
router.delete('/:id', deleteTask);

export default router;