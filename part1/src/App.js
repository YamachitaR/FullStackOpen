
import './App.css';

function App() {
  const hoje = new Date()
  const a = 10
  const b = 20

  console.log(hoje, a + b)
  return(

    <div>
      <p>Olá, mundo! Hoje é {hoje.toString()}</p>
    <p>
    {a} mais {b} é {a+b}  
    </p>  
    </div>
  );
}

export default App;
