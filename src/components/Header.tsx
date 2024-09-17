import '../styles/header.css';
import '../styles/utility.css'
import portLogo from "../assets/logo.svg";
import { useState, useEffect } from 'react';
import Button from './Button';
import Close from '../assets/close.svg'
import Menu from '../assets/menu.svg'

export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {

        if (showMobileMenu === true) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "auto";
        }

        return () => {
            document.body.style.overflowY = "auto";
            document.documentElement.style.overflowY = "auto";
        };
    }, [showMobileMenu])

    return (
        <>
            <header className='container py-sm'>
                <nav className="flex items-center justify-between">
                    <img src={portLogo} alt="Logo Port" width={140} height={60} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className='reverse-color' href="#login">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

        </>
    )
}