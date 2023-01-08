var valueGasolina, valueEtanol

function calc(valueGasolina, valueEtanol) {

    valueGasolina = document.querySelector('#gasolina').value
    valueEtanol = document.querySelector('#etanol').value

    console.log(valueGasolina)
    console.log(valueEtanol)

    let result = valueEtanol / valueGasolina



    if (valueGasolina <= '0' || valueEtanol <= '0') {
        document.querySelector('#notice').innerHTML = "*Por favor, preencha os campos com um número válido*"
        document.querySelector('#notice').classList.add('animation')
    }
    else {


        if (result < 0.7) {
            document.querySelector('#calcResult').innerHTML = "É mais vantajoso abastecer com Etanol"
            document.querySelector('.card-etanol').classList.add('animation')
            document.querySelector('#notice').innerHTML = ''
        }

        else if (result >= 0.7) {
            document.querySelector('#calcResult').innerHTML = "É mais vantajoso abastecer com Gasolina"
            document.querySelector('.card-gasolina').classList.add('animation')
            document.querySelector('#notice').innerHTML = ''
        }

    }

}



function clearValues() {

    document.querySelector('#calcResult').innerHTML = ''
    document.querySelector('#gasolina').value = ''
    document.querySelector('#etanol').value = ''
    document.querySelector('.card-gasolina').classList.remove('animation')
    document.querySelector('.card-etanol').classList.remove('animation')
    document.querySelector('#notice').innerHTML = ''

}

calc(valueGasolina, valueEtanol)
clearValues()