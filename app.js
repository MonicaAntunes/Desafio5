const minhaLista = [
  {
    laticinios: [],
    congelados: [],
    frutas: [],
    doces: []
  }
]
let ok = true
while (ok == true) {
  const primeiraPergunta = prompt(
    'você deseja adicionar uma comida na sua lista de compras?'
  )
  if (primeiraPergunta.toLocaleLowerCase() == 'sim') {
    const qualAlimento = prompt('Qual alimento você deseja adicionar a lista?')
    const qualCategoria = prompt('Qual categoria esse alimento se encaixa?')
    minhaLista[0][`${qualCategoria}`].push(qualAlimento)
  }

  if (primeiraPergunta.toLocaleLowerCase() == 'não') {
    const newArray = []
    Object.entries(minhaLista[0]).forEach(([key, value]) => {
      newArray.push([key + ' : ' + value])
    })

    alert(`Lista de compras : ${newArray}`)
    ok = false
  }
}
