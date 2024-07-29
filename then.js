let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("começando a ferver a água")
            resolve()
        }else{
            console.log("É necessário ligar o fogão e colocar a chaleira para ferver a aguá")
            reject()
        }
    })
}

let passaOCafe = (aguaFervida) => {
    return new Promise((resolve) =>{
        console.log("Passo 2 Finalizado")
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) =>{
        console.log("Passo 3 Finalizado")
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) =>{
        console.log("Passo 4 Finalizado")
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() => {
        return passaOCafe()
    })
    .then(() => {
        return tomarCafe()
    })
    .then(() => {
        return lavarXicara()
    })
    .then(() => {
        console.log("Finalizado o ritual do café")
    })