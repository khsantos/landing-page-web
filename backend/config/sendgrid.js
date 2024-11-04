import dotenv from 'dotenv'
import sgMail from '@sendgrid/mail';
dotenv.config();

import pkg from '@sendgrid/mail'
const { setApiKey, send } = pkg;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default { send };