var numSort = [] 
var numEsco = []

function sortNumeros() {

for(let i = 0; i < 6; i++) {

let num = Math.ceil (Math.random() * 60);
console.log(num);
if(!numSort.includes(num)) {
    numSort[i] = num;    
} else {
 i = i - 1;   
}

}

console.log(numSort)
document.getElementById("sorteados").innerHTML = numSort
contarAcertos()

}

function lerNumero(value, pos) {
if(value < 1) {
    alert("Número não pode ser zero ou negativo! Digite novamente.")
} else if (value > 60) {
    alert("Número não pode ser maior do que 60! Digite novamente.")
 } else if(numEsco.includes(value)) {
    alert("Número repetido! Digite novamente.")
 } else {
    
numEsco[pos] = value
console.log(numEsco)

}
}

function verAcertos() {
    
}

function contarAcertos() {
    let cont = 0;
    numEsco.forEach(function(value, index){
        if (numSort.includes(value)) {
            cont++;
        }
    } )

    console.log(cont)
}
