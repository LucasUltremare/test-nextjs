import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes> {/*Routes: Sistema de Rotas ou links */}
          <Route path="/" element={<Home />}/>{/*path: nome do caminho element: vai ser rederizado depois do path */}
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App








{/*
import Titulo from "./Titulo"
function App(){
  return (
    <div>
       <Titulo cor="red" /> Props é somente leitura
       <Titulo cor="blue" />
       <Titulo cor="purple" />
       <Titulo cor="orangered"/> 
    </div>
  )
  
 
}
 */}