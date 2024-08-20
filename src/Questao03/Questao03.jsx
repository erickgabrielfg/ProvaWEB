import { useState } from "react"
import { useEffect } from "react"

const Questao03 = () => {

  //estado para guardar valor consumido da requisição
  const [data, setData] = useState([])

  const getCapitals = async() =>{
    try {
      // faço a requisição usando o fetch e utilizo um segundo await para enfim receber a lista de capitais.
      const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      const data = await response.json()
      
      //seto apenas se data não for "undefined".
      if(data){
        setData(data)
      }

    } catch (error) {
      console.log(error)
    }
  }

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

  //com esse useEffect, garanto que, assim que o componente for renderizado a primeira
  //vez, a função "getCapitals()" será chamada.
  useEffect(() => {
    getCapitals()
  }, [])

  return (
    <>
    {
      printaMenorMaior()
    }
    </>
  )
}

export default Questao03