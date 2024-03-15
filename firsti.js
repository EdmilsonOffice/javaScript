//concatenação, interpelação, literal templates

//propriedades de um carro
//1 Declaração 2 identificação da variavel 3 tipo da variavel

const corDoCarro = "vermelho"
const modeloDoCarro = "Sandero"
const marcaDoCarro = "Renaut"
const chassiDoCarro =  7472748984704874989
const anoDoCarro = 2012

console.log(" Cor predominante: " + corDoCarro + " Modelo: " + modeloDoCarro + " Marca: " + marcaDoCarro + " Chassi: " + chassiDoCarro + " Ano: " +anoDoCarro
    )
    //segundas forma einterpolação
    console.log(`cor predominante: ${corDoCarro}, Modelo: ${modeloDoCarro}, Marca: ${marcaDoCarro}, chassi: ${chassiDoCarro}, Ano: ${anoDoCarro}`)

    //Terceira forma literal templates
    console.log("Bem vindo ao bar do Guilherme:",
    "1-Litrão,",
    "2- Pitão,",
    "3- Refri,",
    "4- Agua,",
    )

    console.log(`Bem vindo ao bar do Guilherme, escolha uma opção:
    1- Agua
    1- Coca
    3- Pepsi
    4- Litrão
    `);