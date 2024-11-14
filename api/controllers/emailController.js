import dotenv from 'dotenv';
import sendEmailService from '../services/emailService.js';

dotenv.config();

export const sendEmailController = async (req, res) => {
    const { to, subject, text } = req.body;

    const result = await sendEmailService({ to, subject, text });

    if (result.success) {
        return res.status(200).json({ message: result.message });
    } else {
        return res.status(500).json({ message: result.message });
    }
};