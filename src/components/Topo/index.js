import estilos from './Topo.module.css'


export default function Topo() {
    return (
        <header>
            <div className={estilos.topo}>
                <picture>
                    <a href=""> <img src='./logoPerfume1.png'/> </a>
                </picture>

                <nav>
                    <a href="#"> Produtos </a>
                    <a href="#"> Sobre </a>  
                    <a href="#"> Contatos </a>
                     
                </nav>
            </div>
        </header>
    )
}