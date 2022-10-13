import "./CampoTexto.css";

export const CampoTexto = (props) => {
    return (
        <div className="campo_texto">
            <label>{ props.label }</label>
            <input required={props.obrigatorio} placeholder={ props.placeholder }/>
        </div>
    );
}
