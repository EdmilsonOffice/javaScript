//Arrays são como caixascom outras caixas dentro, que podem ser acessadas através do índice entre colchetes []. O primeiro índice sempre começa do 0, portanto um array de 4 posições terá o índice de 0 a 3


//O array é heterogenio, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, Double, Booleam...


// realizando a criação de um array:
// Indice =   0          1           2      3
//const arr = ["girafa", "camaleão", "zebra", 3]
//  11
//arr[10] = "leão"


//console.log(`
  //  ${arr.length}
//`);
//arr.push("qualquer coisa");
//arr.push("Girafa");


//console.log(`
  //  ${arr.length}
//`);


//***************************Metodo 01 - push ************************* */
//permite adicionar valores no final do arry!
// const pushArray = ['Leão', 'Tartaroga', 'Papagaio']
// console.log(pushArray);


// pushArray[1] = 'Borboleta'
// console.log(pushArray);


// pushArray.push('escorpião')
// console.log(pushArray);


// pushArray.push('dragão')
// console.log(pushArray);


// //unshift -> adiciona elementos no inicio do array
// pushArray.unshift('coelho')
// console.log(pushArray);


//***************************Metodo 02 - pop ************************* */
// const popArray = ["Fernando", 'Mara', 'Eric', 'Gabriel']
// console.log(popArray);


// //elimina o último valor do array
// popArray.pop()
// console.log(popArray);


// //remove o primeiro elemento do array
// popArray.shift()
// console.log(popArray);

//***************************Metodo 03 - pop ************************* */
// metodo splice permite selecionar um índice remover e adicionar valores(substituição)
//Ìndice  =            0      1      2      3
// const spliceArray = ['jan', 'fev', 'abr', 'jun']

// console.log(spliceArray);

// spliceArray.splice(2, 0, 'mar')
// spliceArray.splice(4, 0, 'maio')

// console.log(spliceArray);

//***************************Metodo 04 - filter ************************* */

// const filterArray = [1,80,2, 20, 30, 100, 93729]
// console.log(filterArray);

// const novoArray = filterArray.filter((qualquercoisa) => {
//     return qualquercoisa > 10
// })
// console.log(novoArray);

// const filterArray = ["Guilherme", "amanda", "Rogerio", "Gabrielll", "Renata"]
// console.log(filterArray);

// const novoArray = filterArray.filter((qualquercoisa) => {
//     return qualquercoisa == "Guilherme" || qualquercoisa == "amanda"
// })
// console.log(novoArray);

//***************************Metodo 05 - map ************************* */
// índice =       0  1  2  3  4
//o map não modifica o array original, somente a função de callback poderá fazer isso! Ou seja, ela criará um novo array modificado.

// const arrayMap = [1, 2, 3, 4, 5]

// const arrayModificado = arrayMap.map( (x) => { return x * 2});

// console.log(arrayModificado);

//***************************Metodo 06 - forEach ************************* */

// const foreachArray = ['Carlos', 'andre', 'Julia', 'akitra']
// console.log(foreachArray);
// foreachArray.forEach((nome) => {

// console.log(nome);
// })