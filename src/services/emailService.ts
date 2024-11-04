import axios from 'axios';

interface EmailData {
    to: string;
    subject: string;
    text: string;
}

interface EmailResponse {
    success: boolean;
    message: string;
}

export const sendEmail = async (emailData: EmailData): Promise<EmailResponse> => {
    try {
        const response = await axios.post(
            'http://localhost:5000/',
            emailData,
            {
                headers: {
                    'Authorization': process.env.REACT_APP_AUTH_TOKEN || '',
                },
            }
        )

        return { success: true, message: response.data.message };
    } catch (error) {
        console.error('Erro ao enviar e-mail: ', error);
        return { success: false, message: 'Falha ao enviar e-mail.' };
    }
}