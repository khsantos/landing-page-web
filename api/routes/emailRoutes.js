import express from 'express';
import { sendEmailController } from '../controllers/emailController.js';

const router = express.Router();

const TOKEN = process.env.AUTH_TOKEN;

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token || token !== TOKEN) {
        return res.sendStatus(403);
    }
    next();
};

router.post('/', authenticateToken, sendEmailController);

export default router;