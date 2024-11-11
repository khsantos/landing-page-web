import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (req, res) => {
    const { to, subject, text } = req.body;

    const msg = {
        to,
        from: 'kaauhheidemann@hotmail.com',
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }
};