
const Questao01A =  () =>{
  //lista com 3 objetos anônimos e seus respectivos números.
  const lista = [
    {a: 10, b: 3, c: 7},
    {a: 5, b: -3, c: 9},
    {a: 1, b: 9, c: 40},
  ]

  return(
    <>
      <Questao01B lista={lista}/>
    </>
  )
}

function Questao01B({lista}){

  //função que recebe um objeto anônimo no formato dos objetos da lista. Vai facilitar os cálculos.
  const retornaMaior = ({a, b, c}) =>{
    let maior = a;

    //nessas duas condições, comparo o elemento "maior" com o próximo do obejto. Caso o elemento do objeto
    //se prove maior, eu atualizo o valor da variável
    if(b > maior){
      maior = b
    }

    if(c > maior){
      maior = c
    }

    return(
      <h3>{maior}</h3>
    )
  }
  return(
    <>
      {
        //aqui eu faço um map nos elementos da lista. Cada elemento da lista será passado como parâmetro da função
        //e me retornará o maior dentre os seus 3 atributos.
        lista.map((item) => retornaMaior(item))
      }
    </>
  )
}

export default Questao01A