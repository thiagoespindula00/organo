import { CardColaborador } from '../CardColaborador/CardColaborador';
import './Time.css';

export const Time = (props) => {

    const cssStyleSection = {
        backgroundColor: props.corSecundaria
    }

    const cssStyleH3 = {
        borderColor: props.corPrimaria
    }

    return(
        props.colaboradores.length > 0 && <section className="time" style={cssStyleSection}>
            <h3 style={cssStyleH3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <CardColaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    );
}
