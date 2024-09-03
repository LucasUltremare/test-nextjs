import { useState } from "react";
function Titulo({ cor }) { {/*Mudar o estado via react*/}
const [texto, setTexto] = useState("Titulo inicial")
const [inputText, setInputText] = useState("");
 {/* No useState ele salva a const como se fosse uma memoria, e cada item tem uma memoria propria*/}
    function clicou() {
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />   {/* Use sempre a contra barra para fechar */}
            <button onClick={clicou}>Mudar</button> {/*Ele troca a memoria do texto pelo setTexto */}
        </div>
    );
}

export default Titulo;