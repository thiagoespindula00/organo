import "./CampoTexto.css";

export const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className="campo_texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}
