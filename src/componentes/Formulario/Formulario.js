import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

export const Formulario = () => {
    
    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const aoSalvar = (evento) => {
        console.log('Form foi submetido');
        evento.preventDefault();
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}
