let convert = document.getElementById('convert')
let cantidad = document.getElementById('cantidad')
let divisa = document.getElementById('divisa')
let resultado = document.getElementById('resultado')

// divisa.addEventListener('change', (e) =>{
//     console.log(e.target.value)
// })

// convert.addEventListener('click', () =>{
//     let elegida = parseInt(divisa.value)
//     let cuanto = parseInt(cantidad.value)
//     let result = cuanto*elegida
//     resultado.innerHTML = `${cuanto} son: ${result}`
// })


let convertilos = () =>{
    let valor = 0
    let moneda = "usd"

    if (divisa.value == 'usd'){
        valor = 370
        moneda = 'usd'
    }else{
        valor = 380
        moneda = 'eur'
    }
    
    let cuanto = parseInt(cantidad.value)
    let result = cuanto*valor
    resultado.innerHTML = `${cuanto} ${moneda} son: ${result} pesos`
}

convert.addEventListener("click", convertilos)