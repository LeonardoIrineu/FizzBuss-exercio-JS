function jogar(){
    var numero = document.querySelector('#escrevaONumero')
    var numeroDigitado = Number(numero.value)
    var resultado = document.querySelector('#resultado')

    
    if ( numeroDigitado === 0 ) {
        resultado.innerHTML = `[erro!!!]`
    } else if (numeroDigitado % 3 !== 0 && numeroDigitado % 5 !== 0){
        resultado.innerHTML = `BuzzFizz`
    } else if (numeroDigitado % 3 == 0 && numeroDigitado % 5 !== 0) {
        resultado.innerHTML = `Fizz`
    } else if (numeroDigitado % 5 == 0 && numeroDigitado % 3 !== 0) {
        resultado.innerHTML = `Buzz`
    } else if (numeroDigitado % 3 == 0 && numeroDigitado % 5 == 0) {
        resultado.innerHTML = `FizzBuzz`
    }
}