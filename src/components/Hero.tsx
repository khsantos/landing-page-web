import rectangle1 from '../assets/images/rectangle-1.png';
import rectangle2 from '../assets/images/rectangle-2.png';
import '../styles/index.css'
import '../styles/utility.css'
import "../styles/hero.css";
import Button from './Button';

export default function Hero() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={rectangle2} alt="Retangulo um tela inicial" className='retangulo-dois' />
                </span>
                <img src={rectangle1} alt="Retangulo dois tela inicial" />

                <div className='container content'>

                    <p className='desktop-only'>
                        Bem-vindo !</p>
                    <h1>
                        Port oferece o que tem de melhor no mercado: Qualidade e Autonomia
                    </h1>
                    <p>Veja nossas ofertas e fique por dentro de tudo que podemos lhe oferecer através de nossos serviços!</p>
                    <div className='flex gap-1'>

                        <span> <Button text='Cadastre-se' /> </span>

                        <span className='desktop-only'><Button text='Veja Mais' secondary /> </span>

                    </div>
                </div>
            </section>

        </>
    )
}