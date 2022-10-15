import "./ListaSuspensa.css";

export const ListaSuspensa = (props) =>  {
    return (
        <div className="lista_suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterar(evento.target.value)} defaultValue={props.valor}>
                <option></option>
                {props.itens.map(item => <option key={item.nome}>{item.nome}</option>)}
            </select>
        </div>
    );
}
