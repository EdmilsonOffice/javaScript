# Operadores em JavaScript

Aprendendo a utilizar os operados na linguagem javaScript.

## operadores-aritmeticos.js

inicialmente, declaramos as variaveis com a palavra `const`/.

~~~~js
const numero1 = 30;
const numero2 = 20;
~~~~

Depois, realizamos as operações utilizando os operadores aritmeticos:

* `+`: soma dois numeros
* `-`: subtrai dois numeros 
* `*`: multiplica dois numeros
*`/`: divide dois numeros
*`%`: obtém o resto da divisão de dois numeros

~~~~js
console.log(`os numeros que vão ser operados são: ${numero1} e ${numero2}`);
console.log(`A soma dos numeros é: ${numero1 + numero2}`);
console.log(`A subtração dos numeros é: ${numero1 - numero2}`);
console.log(`A multiplicação dos numeros é: ${numero1 * numero2}`);
console.log(`A divisão dos numeros é: ${numero1 / numero2}`);
console.log(`O resto dos numeros é: ${numero1 % numero2}`);
~~~~

As operações são realizadas no momento da impressão do resultado e não nescessitam ser armazenadas em variaveis.

## operadores-atribuicao.js

~~~~js
let numero = 10;
~~~~
 Declaramos a variavel `numero` usando a reserva `let`, pois essa variavel será reatribuida ao longo do nosso codigo.

 Em seguida, fazemos uma série de reatribuições utilizando os operadores de atribuição.

 ~~~~js

console.log(`O numero inicial é: ${numero}`);
console.log(`Somando 10: ${numero += 10}`);
console.log(`Subtraindo 10: ${numero -= 10}`);
console.log(`Multiplicando por 10: ${numero *= 10}`);
console.log(`Dividindo por 10: ${numero /= 10}`);
console.log(`Elevando a potência de 10: ${numero **= 10}`);
console.log(`obitendo o resto da divisão por 10: ${numero %= 10}`);
console.log(`Incrementando 1: ${++numero}`);
console.log(`Decrementando 1: ${--numero}`);
console.log(`O numero final é: ${numero}`);
~~~~

Operadores de atribuição:

*` += `-> o próprio valor somado ao novo valor
*` -= `-> o próprio valor subtraindo-se o novo valor
*` *= `-> o próprio valor multiplicado pelo novo valor
*` /= `-> o próprio valor dividido pelo novo valor 
*` **= `-> o próprio valor elevado a potência do novo valor
*` %= `-> o resto da divisão do próprio valor pelo novo valor
*`++` -> o próprio valor **incrementado (somado) com 1** (pode ser um_pré-incremento_ ou _pós-incremento_).
*`--` -> o próprio valor **decrementado (subtraido) com 1** ( pode ser um _pré-incremento_ ou _pós-incremento_).

