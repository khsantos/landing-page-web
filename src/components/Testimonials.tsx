import '../styles/testimonials.css';
import '../styles/index.css';
import '../styles/utility.css';
import { ProfileTestimonials } from './ProfileTestimonials';
import { useEffect, useState } from 'react';

export const Testimonials = () => {
    const testimonials = [
        {
            quote: 'Port tem me ajudado a economizar meu tempo e conseguir atingir meus objetivos facilmente.”',
            imageSrc: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Pedro Cardoso',
            profileName: 'Pedro Cardoso',
            profileRole: 'Engineer'
        },
        {
            quote: 'Port revolucionou a forma como trabalho e gerencio meu tempo, conseguindo fazer mais sem exigir muito de si.”',
            imageSrc: 'https://plus.unsplash.com/premium_photo-1674814949504-1360b9119de2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
            alt: 'Mayara Klasnok',
            profileName: 'Mayara Klasnok',
            profileRole: 'Product Manager'
        },
        {
            quote: 'A plataforma Port me deu a liberdade de trabalhar de onde eu quiser e ainda manter alta produtividade.”',
            imageSrc: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=1686&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'João da Silva Rocha',
            profileName: 'João da Silva Rocha',
            profileRole: 'Freelance Designer'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextTestimonial();
        }, 4000);

        return () => clearInterval(interval);
    }, [])

    const handleNextTestimonial = () => {
        setFadeClass('');

        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
            setFadeClass('fade-in');
        }, 10);
    };

    const handlePreviousTestimonial = () => {
        setFadeClass('');

        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
            setFadeClass('fade-in');
        }, 10)
    }

    return (
        <section id="testimonials">
            <div className="testimonial-container">

                <div className="left-section">
                    <h2>De nossa <br /><span>comunidade</span></h2>
                    <p>Dê uma olhada em o que outros inscritos têm a falar sobre Port.</p>

                    <div className="navigation-buttons">
                        <button className="navigation-button previous" onClick={handlePreviousTestimonial}></button>
                        <button className="navigation-button next" onClick={handleNextTestimonial}></button>
                    </div>
                </div>

                <div className={`right-section ${fadeClass}`}>
                    <ProfileTestimonials
                        quote={testimonials[currentIndex].quote}
                        imageSrc={testimonials[currentIndex].imageSrc}
                        alt={testimonials[currentIndex].alt}
                        profileName={testimonials[currentIndex].profileName}
                        profileRole={testimonials[currentIndex].profileRole}
                    ></ProfileTestimonials>
                </div>
            </div>
        </section>
    );
};
