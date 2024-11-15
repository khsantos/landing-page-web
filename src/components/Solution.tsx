import '../styles/solution.css'
import '../styles/index.css'
import '../styles/utility.css'

type CardProps = {
    title: string;
    imageUrl: string;
    buttonText: string,
}

const Card = ({ title, imageUrl, buttonText }: CardProps) => {
    return (
        <>
            <div className="card">
                <h3 className='card-title'>{title}</h3>
                <img src={imageUrl} alt={title} className="card-image" />
                <p className='p'>A melhor oferta para quem está a procura de rapidez e confortabilidade</p>
                <button className="card-button">{buttonText}</button>
            </div>
        </>
    );
}

export default function Solution() {
    const cardData = [
        {
            title: 'Estudantes',
            imageUrl: 'https://media.istockphoto.com/id/1389465862/pt/foto/shot-of-a-young-businessman-working-on-his-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=ynMLx4n_KDKo7Rw5mCPD9TNp02lp8H0GOWnKtayJ9nk=',
            buttonText: 'Saiba Mais',
        },
        {
            title: 'Empresas',
            imageUrl: 'https://st2.depositphotos.com/3591429/5245/i/450/depositphotos_52459259-stock-photo-group-of-busy-people-working.jpg',
            buttonText: 'Saiba Mais',
        },
        {
            title: 'Startups',
            imageUrl: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2021/10/11-2-810x456.png',
            buttonText: 'Saiba Mais',
        },
    ];


    return (
        <>
            <div className="cards-container">
                <h2>Clientes</h2>
                <h1 className="cards-title">Quem mais beneficiamos?</h1>
                <div className="cards">
                    {cardData.map((card, index) => (
                        <Card key={index} title={card.title} imageUrl={card.imageUrl} buttonText={card.buttonText} />
                    ))}
                </div>
            </div>
        </>
    )
}