import  estilos from './Capa.module.css'

export default function Capa () {
    return (
        <section className={estilos.secao_capa}>
            <div className={estilos.texto}>
                <h2> Sua fragância favorita </h2>
                <h1> Ainda melhor </h1>
            </div>
        </section>
    )
}