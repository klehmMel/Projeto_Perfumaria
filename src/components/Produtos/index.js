import estilos from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2> Nossos Produtos </h2>
                <p> 
                    Aqui, reunimos as fragâncias mais sofisticadas do mercado, trazendo pra você marcas renomadas e essências marcantes que trazem luxo, elegância e personalidade.
                </p>
                <p>
                    Autenticidade garantida | As melhores marcas do mundo | Envio rápido e seguro
                </p>

                
                <div className={estilos.perfume_img}>
                    <div className={estilos.card_perfume}>
                        <span className={estilos.selo}> Novo </span>
                        <h3> Idôle 50ml </h3>
                        <picture>
                            <img src='./perfume1.png' alt='Perfume'></img>
                        </picture>
                        <p className={estilos.preco}> R$ 434.90 </p>
                        <button className={estilos.botao}> Comprar Agora  </button>
                    </div>

                     <div className={estilos.card_perfume}>
                        <span className={estilos.seloNovo}> Mais Vendidos </span>
                        <h3> Idôle 50ml </h3>
                        <picture>
                            <img src='./perfume2.png' alt='Perfume'></img>
                        </picture>
                        <p className={estilos.preco}> R$ 434.90 </p>
                        <button className={estilos.botao}> Comprar Agora  </button>
                    </div>

                     <div className={estilos.card_perfume}>
                       
                        <h3> Idôle 50ml </h3>
                        <picture>
                            <img src='./perfume3.png' alt='Perfume'></img>
                        </picture>
                        <p className={estilos.preco}> R$ 434.90 </p>
                        <button className={estilos.botao}> Comprar Agora  </button>
                    </div>

                     <div className={estilos.card_perfume}>
                       
                        <h3> Idôle 50ml </h3>
                        <picture>
                            <img src='./perfume4.png' alt='Perfume'></img>
                        </picture>
                        <p className={estilos.preco}> R$ 434.90 </p>
                        <button className={estilos.botao}> Comprar Agora  </button>
                    </div>



                </div>



              
            </div>
        </section>
    )

}