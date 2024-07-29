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

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let passarCafe = () => console.log("passando café")

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log("fazendo café")