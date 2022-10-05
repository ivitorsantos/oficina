
var tomado = parseFloat(localStorage.getItem('tomado'))
var meta = localStorage.getItem('meta')
const date = new Date()
const hoje = date.getDate();

let bar = document.getElementById('bar').style
let circle = document.getElementById('circle').style
let quantidade = document.getElementById('bebido')



document.getElementById('bar').innerHTML = meta + ' ml'


if(meta > 0) {
    if(hoje != parseInt(localStorage.getItem('ultimaData'))) {
        tomado = 0
        localStorage.setItem('tomado', 0)
    }else {
        console.log('foi')
        bar.background = 'linear-gradient(90deg, rgb(15, 199, 255) '+ (tomado) + '%, rgba(58,59,65,1) 1%)'
        circle.background = 'linear-gradient(360deg, rgb(15, 199, 255) '+ (tomado) + '%, rgba(58,59,65,1) 1%)'
        quantidade.innerHTML = Math.round(((window.localStorage.getItem('tomado')/100)*window.localStorage.getItem('meta'))) + ' ml'

    }
} else {
    tomado = 0
    openModal()
}

function bebeu() {
    let copo = document.getElementById('tamanho-copo').value
    let adicionar = (copo/meta)*100

    tomado = tomado+adicionar
    window.localStorage.setItem('tomado', tomado)
    window.localStorage.setItem('ultimaData', hoje)

    quantidade.innerHTML = Math.round(((window.localStorage.getItem('tomado')/100)*window.localStorage.getItem('meta'))) + ' ml'

    bar.background = 'linear-gradient(90deg, rgb(15, 199, 255) '+ (tomado) + '%, rgba(58,59,65,1) 1%)'
    circle.background = 'linear-gradient(360deg, rgb(15, 199, 255) '+ (tomado) + '%, rgba(58,59,65,1) 1%)'
    
}


function openModal() {
    let element = document.getElementById('modal-meta').style
    element.marginTop = "0px"
    
}

function closeModal() {
    let element = document.getElementById('modal-meta').style
    element.marginTop = "-1500px"
    console.log(element)
}


function definirMeta() {
    meta = Math.round(document.getElementById('pesoCorporal').value*37.5)
    document.getElementById('valor-meta').innerHTML = "Sua metá é: " + meta + " ml"
    localStorage.setItem('meta', meta)
    console.log(meta)
    document.getElementById('bar').innerHTML = meta + ' ml'
    closeModal()

}