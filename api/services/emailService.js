import sgMail from "../config/sendgrid.js"

const sendEmail = async ({ to, subject, text }) => {
    const msg = {
        to,
        from: 'kaauhheidemann@hotmail.com',
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        console.log("Email enviado com sucesso.")
        return { success: true, message: 'E-mail enviado com sucesso.' };
    } catch (error) {
        console.error('Erro ao enviar mensagem: ', error);
        return { success: false, message: 'Falha ao enviar e-mail.' };
    }
}

export default sendEmail;