const btnmobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')  
}

btnmobile.addEventListener('click', toggleMenu)

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function calcularIMC() {
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var res = document.getElementById('res-calculadora')
    var calcula = Number(peso.value) / (Number(altura.value) * Number(altura.value))
    var error = document.getElementById('error-altura')
    var errorPeso = document.getElementById('error-peso')
    var margin = document.getElementById('container-apresentacao')
    margin.style.marginTop = '80vh'
    error.innerHTML = ''
    errorPeso.innerHTML = ''

    if (Number(altura.value) >= 10 && Number(peso.value) > 400) {
        error.style.fontSize = '10pt'
        error.style.color = 'red'
        error.innerHTML = `<p>Máximo 9,99 cm</p>`
        errorPeso.style.fontSize = '10pt'
        errorPeso.style.color = 'red'
        errorPeso.innerHTML = `<p>Máximo 400 kg</p>`
    }
    else if (Number(altura.value) >= 10) { 
        error.style.fontSize = '10pt'
        error.style.color = 'red'
        error.innerHTML = `<p>Máximo 9,99 cm</p>`

    } else if (Number(peso.value) > 400){
        errorPeso.style.fontSize = '10pt'
        errorPeso.style.color = 'red'
        errorPeso.innerHTML = `<p>Máximo 400 kg</p>`
    } else {
        if (calcula < 17) {   
            res.innerHTML = `Peso muito baixo, seu IMC é de ${calcula.toFixed(2)} ${texto}`
        } else if (calcula < 18.49) {
            res.innerHTML = `Peso baixo, seu IMC é de ${calcula.toFixed(2)} ${texto}`
        } else if (calcula < 24.99) {
            res.innerHTML = `Peso  normal, seu IMC é de ${calcula.toFixed(2)} ${texto}`
        } else if (calcula < 29.99) {
            res.innerHTML = `Acima do peso, seu IMC é de ${calcula.toFixed(2)} ${texto}`
        } else if (calcula < 34.99) {
            res.innerHTML = `Obesidade I, seu IMC é de ${calcula.toFixed(2)} ${texto}`
        } else if (calcula < 39.99) {
            res.innerHTML = `Obesidade II(severa), seu IMC é de ${calcula.toFixed(2)} ${texto}`
        } else if (calcula < 999999999) {
            res.innerHTML = `Obesidade III(mórbita), seu IMC é de ${calcula.toFixed(2)} ${texto}`
        }

        
    }
    altura.addEventListener('click', limparError)
    peso.addEventListener('click', limparError)
}

function limparError() {
    var error = document.getElementById('error-altura')
    var errorPeso = document.getElementById('error-peso')
    error.innerHTML = ''
    errorPeso.innerHTML = ''

}
