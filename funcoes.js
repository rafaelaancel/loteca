var numEsco = [];
var numSort = [];

function sortNumeros() {
  for (let i = 0; i < 6; i++) {
    let num = Math.ceil(Math.random() * 60);
    console.log(num);
    if (!numSort.includes(num)) {
      numSort[i] = num;
    } else {
      i = i - 1;
    }
  }

  console.log(numSort)
  document.getElementById("sorteados").innerHTML = numSort
  contarAcertos()
}

function lerNumero(value, pos){
  let num = Number(value)
  if(num < 1) {
    alert("Numero não pode ser zero ou negativo! Digite novamente")
  } else if(num > 60) {
    alert("Numero não pode ser maior que 60! Digite novamente")
  } else if(numEsco.includes(num)){
    alert("Numero Repetido! Digite novamente")
  } else {
    numEsco[pos] = num
    console.log(numEsco)
  }

}

function contarAcertos(){
  let cont = 0;
  numEsco.forEach(function(value,index){
    if(numSort.includes(value)){
      cont = cont + 1;
    }
  })
  document.getElementById("acertos").innerHTML = cont;

}