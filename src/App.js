import { useState } from 'react';
import Banner       from './componentes/Banner';
import Formulario   from './componentes/Formulario';
import Time         from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const adicionaNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarNovoColaborador={adicionaNovoColaborador}/>
      <Time nome="Programação" />
      <Time nome="Front-end"/>
    </div>
  );
}

export default App;
