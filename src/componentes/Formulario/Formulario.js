import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";

export const Formulario = () => {
    
    const times = [
        "Front-End",
        "Data Science",
        "Devops",
        "Programação",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const [nome  , setNome  ] = useState('');
    const [cargo , setCargo ] = useState('');
    const [imagem, setImagem] = useState('');
    const [time  , setTime  ] = useState('Programação');


    const aoSalvar = (evento) => {
        console.log('Form foi submetido =>', nome, cargo, imagem, time);
        evento.preventDefault();
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    aoAlterar={setNome} 
                    valor={nome} 
                />
                <CampoTexto 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    aoAlterar={setCargo}
                    valor={cargo}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    aoAlterar={setImagem}
                    valor={imagem}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Times"
                    itens={times}
                    aoAlterar={setTime}
                    valor={time}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}
