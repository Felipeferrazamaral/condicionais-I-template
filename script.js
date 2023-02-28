// // exericio 1 condicao simples

// const velocidade = 15
// console.log(`A sua velocidade e ${velocidade}`)

// console.log(`Voce esta a cima da velocidade maximo permitida.`)


// if(velocidade > 80){
//     console.log(`Voce esta a cima da velocidade maximo permitida.`)

// }

// //exercicio condicao composta

// const estaChovendo = true

// if(estaChovendo) {
//     console.log(`As roupas estao no varal`)
// } else {
//     console.log(`Bora surfar, esta sol`)
// }

// pratica guiada 1 - A
// const boleano1 = false
// const boleano2 = true

// if(boleano1){
//     alert(`Boleano 1 eh True`)
// } else {
//     alert(`Boleano 1 eh False`)
// }

// pratica guiada 1 - b
//  const boleano3 = true

//  if(boleano1 === boleano2) {
//     alert(`Boleano 1 e boleano 2 sao iguais!`)
//  } else if(boleano2 === boleano3) {
    
//         alert(`Boleano 2 e boleano 3 sao iguai!`)
//     } else if (boleano1 === boleano3) {
//         alert(`Boleano 1 e boleano 3 sao iguais!`)
//     } else {
//         alert(`nao existem valores iguais!`)
//     }
 

    //bolinho de chuva

    // const temOvo = true
    // const temFarinha = true
    // const temLeite = true
    // const temAcucar = true

    // if(!temOvo){
    //     console.log(`ovo:`, temOvo)
    //     console.log(`Nao tem ovo ,deixa quieto`)
    // } else if(!temFarinha){
    // console.log(`farinha`, temFarinha)
    // console.log(`tem ovo, mas nao tem farinha.Deixa quieto`)
    // } else if(!temLeite){
    //     console.log(`leite`, temLeite)
    //     console.log(`Mesm com a farinha e os ovos, nao tem leote. Nao da pra fazer obolin`)
    
    // }else if(!temAcucar){
    //     console.log(`Acucar`, temAcucar)
    //     console.log(`Olha agt tem tudo menos o acucuar, entao nao rola`)
    // }else {
    //     console.log(`Agora tu consegue meu consagrado!`)
    // }

    // pratica guiada 2



    // const idade = prompt(`qual a sua idade?`)

    // if(idade < 16) {
    //     console.log(`voce nao pode votar`)

    // } else if (idade < 18 || idade >= 70) {
    //     console.log(`voce pode votar -  facultativo`)
    // } else if (idade >= 18) {
    //     console.log(`voce pode votar`)
    // } else {
    //     console.log(`dado invalido`)
    // }

    const media = 10

    if(media >= 5) {
        console.log(`voce foi aprovado`)
    } else if (media >= 3) {
        console.log(`recuperacao`)
    } else if (media < 3) {
        console.log(`Estudante reprovado`)
    } else {
        console.log(`dado invalido`)
    }