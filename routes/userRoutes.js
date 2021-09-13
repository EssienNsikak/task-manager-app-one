import express from 'express';

const router = express.Router();
import { view, update, deleteUser } from '../controllers/userControllers.js';
import { validateUpdateUser } from '../middleware/userMiddleware.js';
import { isAuth } from '../utils.js';


router.get('/users/:id', isAuth, view);

router.put(
  '/users/:id',
  isAuth,
  validateUpdateUser,
  update
);

router.delete('/users/:id', isAuth, deleteUser);

export default router;
