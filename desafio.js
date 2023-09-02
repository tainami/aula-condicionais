// Desafio 1
const filme = prompt("Qual o gênero do filme?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
function verFilme(generoFilme, valor) {
    if(generoFilme.toLowerCase() === "fantasia" && valor < 15) {
        const lanche = prompt("Que lanchinho você vai comprar?")
        console.log(`Aproveite seu lanchinho ${lanche}`)
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}
verFilme(filme, valorIngresso)

// Desafio 2 
function ingressoJogo() {
    let nome = prompt("Nome completo:")
    let tipoJogo = prompt("Tipo do jogo: IN para internacional ou DO para doméstico")
    let estapaJogo = prompt("Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
    let categoria = Number(prompt("Categoria: 1, 2, 3 ou 4"))
    let quantidadeIngresso = prompt("Quantos ingressos?")
    let valorDoIngresso = 0 

    const verValorIngresso = () => {
        if(estapaJogo.toLocaleUpperCase() === "SF" && categoria.toUpperCase() === 1) {
            valorDoIngresso += 1320.00
        } else if(estapaJogo.toLocaleUpperCase() === "SF" && categoria.toUpperCase() === 2) {
            valorDoIngresso += 880.00
        } else if(estapaJogo.toLocaleUpperCase() === "SF" && categoria.toUpperCase() === 3) {
            valorDoIngresso += 550.00
        } else if(estapaJogo.toLocaleUpperCase() === "SF" && categoria.toUpperCase() === 4) {
            valorDoIngresso += 220.00
        } else if(estapaJogo.toLocaleUpperCase() === "DT" && categoria.toUpperCase() === 1) {
            valorDoIngresso += 660.00
        } else if(estapaJogo.toLocaleUpperCase() === "DT" && categoria.toUpperCase() === 2) {
            valorDoIngresso += 440.00
        } else if(estapaJogo.toLocaleUpperCase() === "DT" && categoria.toUpperCase() === 3) {
            valorDoIngresso += 330.00
        } else if(estapaJogo.toLocaleUpperCase() === "DT" && categoria.toUpperCase() === 4) {
            valorDoIngresso += 170.00
        } else if(estapaJogo.toLocaleUpperCase() === "FI" && categoria.toUpperCase() === 1) {
            valorDoIngresso += 1980.00
        } else if(estapaJogo.toLocaleUpperCase() === "FI" && categoria.toUpperCase() === 2) {
            valorDoIngresso += 1320.00
        } else if(estapaJogo.toLocaleUpperCase() === "FI" && categoria.toUpperCase() === 3) {
            valorDoIngresso += 880.00
        } else if(estapaJogo.toLocaleUpperCase() === "FI" && categoria.toUpperCase() === 4) {
            valorDoIngresso += 330.00
        } else if(tipoJogo.toLocaleUpperCase === "IN") {
            valorDoIngresso = valorDoIngresso * 4.10
        }
    }
}