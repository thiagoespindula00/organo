import "./ListaSuspensa.css";

export const ListaSuspensa = (props) =>  {
    return (
        <div className="lista_suspensa">
            <label>{ props.label }</label>
            <select required={props.obrigatorio}>
                <option></option>
                { props.itens.map(item => <option key={item}>{item}</option>) }
            </select>
        </div>
    );
}
