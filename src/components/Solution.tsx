import '../styles/solution.css'
import '../styles/index.css'
import '../styles/utility.css'

export default function Solution() {
    return (
        <>
            <section id="solution">
                <div className='container content'>
                    <h2 className='desktop-only'>
                        Soluções</h2>

                    <h1>
                        Qualidade e Autonomia garantida
                    </h1>
                    <p>Inovação é com a gente! A Port já conquistou diversos clientes,
                        seja você mais um deles, veja tudo que pode ganhar com nossos serviços</p>

                    <section className='even-columns'>
                        <div className="card img-1">
                            <div className='text-border'>
                                <a href='#'><p className='card-text'>Tente Agora</p></a>
                            </div>
                        </div>
                        <div className="card img-2">
                            <div className='text-border'>
                                <a href='#'><p className='card-text'>Tente Agora</p></a>
                            </div>
                        </div>
                        <div className="card img-3">
                            <div className='text-border'>
                                <a href='#'><p className='card-text'>Tente Agora</p></a>
                            </div>
                        </div>
                    </section>
                    <section className='even-columns'>
                        <div>
                            <h2 className='text-h2'>Estudantes</h2>
                            <p className='text-p'>Port ajuda todos com suas ferramentas únicas e sofisticadas para a melhor experiência para a sua vida </p>
                        </div>
                        <div>
                        <h2 className='text-h2'>Empresas</h2>
                        <p className='text-p'>Port ajuda todos com suas ferramentas únicas e sofisticadas para a melhor experiência para a sua vida </p>
                        </div>
                        <div>
                        <h2 className='text-h2'>Profissionais</h2>
                        <p className='text-p'>Port ajuda todos com suas ferramentas únicas e sofisticadas para a melhor experiência para a sua vida </p>
                        </div>
                    </section>



                </div>
            </section>
        </>
    )
}