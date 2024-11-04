import { PricingCard } from "./PricingCards";
import '../styles/pricing.css'

export const Pricing = () => {
    const plans = [
        {
            title: 'Básico',
            price: null,
            description: 'Plano gratuíto para todos os usuários.',
            features: [
                'Espaços de trabalho ilimitados',
                'Colaboração ilimitada',
                '15GB de armazenamento de dados',
                'Análise Unificada',
                'Acesso ao aplicativo móvel'
            ],
            bgColor: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
        },
        {
            title: 'Médio',
            price: 15,
            description: 'Ideal para negócios pequenos.',
            features: [
                'Espaços de trabalho ilimitados',
                'Colaboração ilimitada',
                '15GB de armazenamento de dados',
                'Análise Unificada',
                'Acesso ao aplicativo móvel'
            ],
            bgColor: 'linear-gradient(135deg, #56ccf2, #2f80ed)',
        },
        {
            title: 'Avançado',
            price: 25,
            description: 'O melhor negócio para grandes empresas.',
            features: [
                'Espaços de trabalho ilimitados',
                'Colaboração ilimitada',
                '15GB de armazenamento de dados',
                'Análise Unificada',
                'Acesso ao aplicativo móvel'
            ],
            bgColor: 'linear-gradient(135deg, #B2E2F0, #0077B3)',
        },
    ];

    return (
        <div className="pricing-page">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
        </div>
    );
};
