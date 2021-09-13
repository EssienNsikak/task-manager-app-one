import express from 'express';
const router = express.Router();

import { 
    create, 
    list, 
    view, 
    update, 
    deleteTask 
} from '../controllers/taskControllers.js';

import { validateCreateTask, validateUpdateTask } from '../middleware/taskMiddleware.js';
import { isAuth } from '../utils.js';

router.post('/tasks', isAuth, validateCreateTask,  create);
router.get('/tasks', isAuth, list);
router.get('/tasks/:id', isAuth, view);
router.put('/tasks/:id', isAuth, validateUpdateTask, update);
router.delete('/tasks/:id', isAuth, deleteTask);

export default router;