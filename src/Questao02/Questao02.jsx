import { useState } from "react"

const Questao02 = () =>{
  //estado para guardar um boolean. 
  const [virar, setVirar] = useState(false)

  //url com Template Strings para poder receber a variável "virar". Caso valor de virar for "true", concatena "back/"
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${virar ? "back/" : ""}25.png`

  return(
    <>

      <img src={url} alt="" />
      {/* butão com propriedade onClick. Caso clicado, inverte valor booleano de virar */}
      <button onClick={() => setVirar(!virar)}>Virar Pokemon</button>
    </>
  )
}

export default Questao02