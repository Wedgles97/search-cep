import { FiSearch } from 'react-icons/fi';
import './styles.css';


function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 85698456</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: algum complemento</span>
        <span>Bairro</span>
        <span>Cidade - Estado</span>

      </main>

    </div>
  );
}

export default App;
