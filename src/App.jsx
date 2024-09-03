import Titulo from "./Titulo"

function App(){
  return (
    <div>
       <Titulo cor="red" /> {/*Props é somente leitura*/}
       <Titulo cor="blue" />
       <Titulo cor="purple" />
       <Titulo cor="orangered"/> 
    </div>
  )
  
 
}

export default App