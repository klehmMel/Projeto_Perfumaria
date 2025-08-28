import estilos from './Contato.module.css'

export default function Contato() {
    return (
        <section id={estilos.contato}>
            <div className={estilos.contato}>
                <h2> Fale conosco </h2>
                <p> Nã perca tempo, venha conhecer uma de nosssas lojas ou entre em contato através de nossasz redes sociais ou da central de atendimento. </p>

                <div className={estilos.central_redes}>
                    <div className={estilos.bloco_contato}>
                        <h4> Contato </h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='001-location.png' alt='localização'/>
                                </picture> Caraguatatuba - SP
                            </li>

                            <li> 
                                <picture>
                                    <img src='' alt='telefone'/>
                                </picture> (12) 00000-0000
                            </li>

                            <li>
                                <picture>
                                    <img src='' alt='E-mail'/>
                                </picture>
                            </li>



                        </ul>
                    </div>

                    <div className={estilos.bloco_contato}>
                        <h4> Redes sociais </h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='' alt='facebook'/>
                                </picture>
                            </li>

                            <li> 
                                <picture> 
                                    <img src='' alt='instagram'/>
                                </picture>
                            </li>

                            <li>
                                <picture>
                                    <img src='' alt='twitter'/>
                                </picture>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}