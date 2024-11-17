import '../styles/promotional.css'
import '../styles/index.css'
import '../styles/utility.css'
import { useState } from 'react'
import axios from 'axios'

export const Promotional = () => {
    const [to, setTo] = useState('');
    const [subject] = useState('Inscrição de notícias e promoções Port.');
    const [text, setText] = useState('');

    const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

    const handleSendEmail = async () => {
        try {
            const response = await axios.post('api', {
                to,
                subject,
                text,
            }, {
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`,
                },
            });
            console.log(response.data.message);
        } catch (error) {
            console.log('Erro ao enviar e-mail.');
            console.error(error);
        }
    }

    return (
        <>
            <section id="promotional">
                <div className='container content'></div>

                <h2 className='desktop-only'>Promoções</h2>
                <h1>
                    Nos Contate!
                </h1>
                <p>Interessado em saber mais sobre nossos produtos? Se inscreva em nosso programa e receba e-mails de promoções e ofertas que podem te interessar!</p>

                <input name="to" onChange={(e) => setTo(e.target.value)} type='email' className='emailInput' placeholder='Informe seu e-mail'></input>
                <input name="text" onChange={(e) => setText(e.target.value)} className='emailInput' placeholder='Motivo do contato. Ex: Gostaria de mais informações sobre produto A'></input>
                <button onClick={handleSendEmail} type='button' className='button'>Enviar</button>

            </section >
        </>
    )
};

