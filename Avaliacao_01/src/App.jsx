import './App.css'
import Questao01X from './components/Questao_01/Questao01'
import Questao02 from './components/Questao_02/Questao02'
import Questao03 from './components/Questao_03/Questao03'

function App() {

  return (
    <div className="app">
      <h1>Avaliação 01</h1>
      <p className="nome-discente"><span>Discente:</span> Francisco Breno da Silveira (511429)</p>
      <div className="questoes">
        <h2>Questão 01</h2>
        <Questao01X />
      </div>
      <div className="questoes">
        <h2>Questão 02</h2>
        <Questao02 />
      </div>
      <div className="questoes">
        <h2>Questão 03</h2>
        <Questao03 />
      </div>
    </div>
  )
}

export default App
