import './Rodape.css';

export const Rodape = () => {
    return (
        <footer className='rodape'>
            <section className='redes_sociais'>
                <a href='https://pt-br.facebook.com/' target='blank'>
                    <img src='/imagens/fb.png' alt='Logo do facebook'/>
                </a>
                <a href='https://twitter.com/' target='blank'>
                    <img src='/imagens/tw.png' alt='Logo do twitter'/>
                </a>
                <a href='https://www.instagram.com/' target='blank'>
                    <img src='/imagens/ig.png' alt='Logo do instagram'/>
                </a>
            </section>
            <section className='logo_organo'>
                <img src='/imagens/logo.png' alt='Logo do organo'/>
            </section>
            <section className='autor_organo'>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    );
}