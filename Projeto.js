//Variável Array com nome do Herói e a quantidade de xp
let heroi = [{nome: "Rogério", xp: 10001}

]

//estrutura de repetição; lê a arry do começo até o final; incrementar um novo valor
for (let repeticao = 0 ; repeticao < heroi.length; repeticao++){
//variável nome do herói; variável de repetição;a coluna para puxar os dados
let nomeHeroi = heroi[repeticao].nome
let xpHeroi = heroi[repeticao].xp
//variável nivel vazio
let nivel = ""


//estrutura de decisão
if (xpHeroi <= 1000){
    nivel = "ferro"
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "bronze"
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "prata"
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "ouro"
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "platina"
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "ascendente"
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "imortal"

//caso não atenda nenhuma das alternativas acima
}else{
    nivel = "radiante"

}

console.log("O herói de nome" +nomeHeroi + " está no nível de "
 + nivel)
}



