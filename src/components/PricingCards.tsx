import '../styles/pricingCards.css'

type PriceCardProps = {
    title: string;
    price: number | null;
    description: string;
    features: string[];
    bgColor: string;
}

export const PricingCard = ({ title, price, description, features, bgColor }: PriceCardProps) => {
    return (
        <div className="pricing-card" style={{ background: bgColor }}>
            <h2 className="pricing-title">{title}</h2>
            <p className="pricing-price">
                {price !== null ? `$${price}` : 'Grátis'} <span>/mês</span>
            </p>
            <p className="pricing-description">{description}</p>
            <button className="pricing-button">Comece já</button>
            <ul className="pricing-features">
                {features.map((feature, index) => (
                    <li key={index} className="pricing-feature-item">
                        ✓ {feature}
                    </li>
                ))}
            </ul>
        </div>
    )
}