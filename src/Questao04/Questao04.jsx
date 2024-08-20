import { useState } from "react"
import { useEffect } from "react"

const Questao04 = () => {

  //estado para guardar valor consumido da requisição
  const [data, setData] = useState([])


  //aqui defino a promessa. Quando a promessa for finalizada, ela irá retornar a
  //lista de capitais em questão
  const promise = new Promise((resolve) =>{
    resolve(
      [
        {"capital":["Dublin"],"population":4994724},
        {"capital":["Nicosia"],"population":1207361},
        {"capital":["Madrid"],"population":47351567}
      ]
    )
  })

  const printaMenorMaior = () =>{
    //se data n existe, então não perco tempo em calcular o restante da função
    if(data.length === 0 ) return
    
    //valores inicias de menor e maior. Os mesmos são objetos.
    let menor = data[0]
    let maior = data[0]
      
    //itero sobre todos os elementos de data. Assim, comparo a população de cada
    //elemento com a população de "maior" e "menor". Atualizo as vaiáveis caso for
    //necessário.
    for(let i = 0; i < data.length; i++){
      if(data[i].population < menor.population){
        menor = data[i]
      }
      if(data[i].population > maior.population){
        maior = data[i]
      }
    }
    
    //retorno o nome e a populção da menor e maior capital
    return(
      <>
        <h3>Capital: {menor.capital[0]}, Menor população: {menor.population}</h3>
        <h3>Capital: {maior.capital[0]}, Maior população: {maior.population}</h3>
      </>
    )
  }

  //utilizo o "then" para receber a lista da promessa. Caso aconteça algum erro ele printa no console.
  useEffect(() => {
    promise.then((response) =>{
      console.log(response)
      setData(response)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <>
    {
      printaMenorMaior()
    }
    </>
  )
}

export default Questao04