import express from 'express';
const router = express.Router();
import authController from '../controllers/authController.js';

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/users', authController.getUsers);

export default router;