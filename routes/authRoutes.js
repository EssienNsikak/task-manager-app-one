import express from 'express';

const router = express.Router();
import { register, login } from '../controllers/authControllers.js';
import { validateRegisterNewUser, validateLoginUser } from '../middleware/authMiddleware.js';



router.post(
  '/auth/register',
  validateRegisterNewUser,
  register
);

router.post('/auth/login', validateLoginUser, login);

export default router;
