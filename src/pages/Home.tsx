import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { Promotional } from "../components/Promotional";
import Solution from "../components/Solution";
import { Testimonials } from "../components/Testimonials";
import '../styles/utility.css';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solution />
            <Testimonials />
            <Pricing />
            <Promotional />
            <Footer />
        </>
    )
}