import './Time.css';

export const Time = (props) => {

    const cssStyleSection = {
        backgroundColor: props.corSecundaria
    }

    const cssStyleH3 = {
        borderColor: props.corPrimaria
    }

    return(
        <section className="time" style={cssStyleSection}>
            <h3 style={cssStyleH3}>{props.nome}</h3>
        </section>
    );
}
