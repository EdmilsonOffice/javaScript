//+ - / * : operadores aritmeticos

console.log(1 / 2);
console.log(1 / 2 === 1.0 / 2.0)

const anoAtual = 2024
const anoNascimento = 1997
// identificador = 2024 - 1997
const idadeRenata = anoAtual - anoNascimento


console.log(`A idade Da Renata é de: ${idadeRenata} anos`);

//............................................................

// Calculo de notas
const aluno = "Carlos" 
const prova01 = 10
const prova02 = 6
const prova03 = 4.6

const media =(  prova01 + prova02 + prova03 ) / 3

console.log(`O Aluno ${aluno}, teve a media de: ${media.toFixed(0)} e, portanto, ele foi aprovado`);