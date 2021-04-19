
window.addEventListener('load', function(){
    var mainForm = document.getElementById('mainForm')


    mainForm.addEventListener('submit', onSubmit)
})

var fullName = document.getElementById('fullName')
var km = document.getElementById('km')
var ageGroup = document.getElementById('ageGroup')

function onSubmit(event){
    event.preventDefault()
    // recupera il form che ha causato il submit
    var form = event.currentTarget

    // recupera gli es dal form 
    var elements = form.elements

    fullName = elements.fullName.value
    document.getElementById('user-name').innerHTML = '<strong>' + fullName + '</strong>'
    km = elements.km.value
    ageGroup = elements.ageGroup.value



    console.log(elements)
    console.log('nome = ' + fullName)
    console.log('km = ' + km)
    console.log('Fascia d/eta = ' + ageGroup)


    if (km > 0){
        switch (ageGroup) {
            case 'maggiorenne':
                var price = km * 0.21;
                console.log(price);
                document.getElementById('tariffa').innerHTML = ageGroup
                document.getElementById('cost').innerHTML = price
                break;
        
            case 'minorenne':
                var price = km * 0.21;
                var price20 = (price - (price * 20 / 100)).toFixed(2);
                console.log(price20);
                document.getElementById('tariffa').innerHTML = ageGroup
                document.getElementById('cost').innerHTML = price20
            break;
            case 'over65':
                var price = km * 0.21;
                var price40 = (price - (price * 40 / 100)).toFixed(2);
                console.log(price40);
                document.getElementById('tariffa').innerHTML = ageGroup
                document.getElementById('cost').innerHTML = price40
            break;
        
            default:
                break;
        } 
    } else {
        if (isNaN(km)) {
            alert('Inserisci i KM in numeri')
        }
    }
    function numGenerator(numero) {
        return numero = Math.floor(Math.random() * 10)
    }
    var carrozza = numGenerator()
    var cpCode = ''
    for (let i = 0; i < 5; i++) {
        var num = numGenerator()
        console.log(num)
        cpCode += num
        
    }
    document.getElementById('carrozza').innerHTML = carrozza
    document.getElementById('cp-code').innerHTML = cpCode
}

// console.log('nome = ' + fullName)
// console.log('km = ' + km)
// console.log('Fascia d/eta = ' + ageGroup)




