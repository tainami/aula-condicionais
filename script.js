// Exercícios interpretação
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.") // Pares 
} else {
  console.log("Não passou no teste.") // Ímpares
}
//O código vê se o resto da divisão do número por 2 é igual a zero. Serve para ver se o número é par

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 
//a) Para que serve o código acima? O código atribui um preço à fruta se ela for igual a um dos casos do switch
//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta Maça é R$2.25
//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? Acho que ele entra no caso default também

const number = Number(prompt("Digite o primeiro número.")) // pega um número digitado pelo usuário em formato string e converte para number

if(number > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}
// se o número for -10 ele entra no if, se for 10 ele não entra

// console.log(mensagem) undefined, pois foi declarado apenas dentro da função

// Exercícios de escrita

// 1
const idadeUsuario = Number(prompt("Qual a sua idade?"))
function podeDirigir(idade) {
    if(idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}
podeDirigir(idadeUsuario)

// 2 
const qualTurno = prompt("Qual turno você estuda? M para para matutino, V para vespertino e N para noturno")
const turnoUsuario = qualTurno.toUpperCase()
if(turnoUsuario === "M") { 
    console.log("Bom dia!")
} else if(turnoUsuario === "V") { 
    console.log("Boa tarde!")
} else if(turnoUsuario === "N") {
    console.log("Boa noite!")
} else {
    console.log("Essa opção não existe")
}

// 3
switch (turnoUsuario) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Essa opção não existe")
        break
}

// 4 
const filme = prompt("Qual o gênero do filme?")
const valorIngresso = Number(prompt("Qual o valor do ingreço?"))
function verFilme(generoFilme, valor) {
    if(generoFilme.toLowerCase() === "fantasia" && valor < 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}
verFilme(filme, valorIngresso)