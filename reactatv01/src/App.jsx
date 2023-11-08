import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import puredebatata from "../assets/puredebatata.jpg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='divmain'>
       <h1>Pure de Batata</h1>
       <label htmlFor="">
      <img src={puredebatata} alt="" />  
      <ul> <h2>Ingredientes</h2>
<li>8 Batatas</li>
<li>Sal a gosto </li>
<li>1 xicara de chá de leite</li>
<li>Manjericao</li>
<li>1 colher de sopa de manteiga</li>
<li>1 cebola</li>
      </ul>
      </label>
<h3>Modo de preparo</h3>
     <p>1- Inicie cozinhando as batatas em uma panela de pressão. Se preferir, retire a casca antes. </p>


<p>2- Quando estiverem cozidas, vamos amassá-las. Se tiver liquidificador ou um processador, pode amassar
dessa forma para ganhar tempo. Se não tiver amasse com um garfo. Nesse momento, acrescente também 1 cebola.</p>

<p>3- Com as batatas ainda quentes, tempere com sal, a margarina e o leite. Misture até que a manteiga derreta completamente.</p>

<p>Feito isso, está pronto nosso purê, é só saborear!</p>
      </div>
      
    </>
  )
}

export default App
