import express from 'express';
const router = express.Router();
import authController from '../controllers/authcontroller.js';

// Rota de registro
router.post('/register', authController.register);

// Rota de login
router.post('/login', authController.login);

// Rota para obter todos os usuários (temporária)
router.get('/users', authController.getUsers);

export default router;
