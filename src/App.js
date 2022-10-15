import { useState } from 'react';
import Banner     from './componentes/Banner';
import Formulario from './componentes/Formulario';

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
    </div>
  );
}

export default App;
