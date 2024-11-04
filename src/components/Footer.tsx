import '../styles/footer.css'
import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import Instagram from '../assets/images/instagram.png';

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Sobre Nós</h3>
                        <p>Somos uma empresa dedicada a oferecer as melhores soluções para nossos clientes.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contato</h3>
                        <p>Email: contato@exemplo.com</p>
                        <p>Telefone: (45) 9999-9999</p>
                    </div>
                    <div className="footer-section">
                        <h3>Redes Sociais</h3>
                        <div className="social-icons">
                            <a href="#"><img src={Facebook} alt="Facebook" width={24} height={24} /></a>
                            <a href="#"><img src={Twitter} alt="Twitter" width={24} height={24} /></a>
                            <a href="#"><img src={Instagram} alt="Instagram" width={24} height={24} /></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <p>&copy; 2024 Port. Todos os direitos reservados.</p>
            </div>
        </>
    )
}