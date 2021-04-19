
window.addEventListener('load', function(){
    var mainForm = document.getElementById('mainForm')


    mainForm.addEventListener('submit', onSubmit)
})

var fullName = document.getElementById('user-name')
var km
var ageGroup

function onSubmit(event){
    event.preventDefault()
    // recupera il form che ha causato il submit
    var form = event.currentTarget

    // recupera gli es dal form 
    var elements = form.elements

    fullName += elements.fullName.value
    km = elements.km.value
    ageGroup = elements.ageGroup.value
    


    console.log(elements)
    console.log('nome = ' + fullName)
    console.log('km = ' + km)
    console.log('Fascia d/eta = ' + ageGroup)

    if ((km > 0) && (ageGroup >= 0)) {
        if (ageGroup == 'Minorenne') {
            var price = km * 0.21;
            var price20 = (price - (price * 20 / 100)).toFixed(2);
            console.log(price20);
            // document.getElementById('price').innerHTML= price20 ;
        } else {
            if (ageGroup == 'Maggiorenne') {
                var price = km * 0.21;
                console.log(price);
                // document.getElementById('price').innerHTML= price ;
            } else {
                var price = km * 0.21;
                var price40 = (price - (price * 40 / 100)).toFixed(2);
                console.log(price40);
                // document.getElementById('price').innerHTML= price40 ;
            }
        }
    } else {
        if (isNaN(km)) {
            // document.getElementById('price').innerHTML= "Please insert KM in numbers" ;
        }
    }

}

// console.log('nome = ' + fullName)
// console.log('km = ' + km)
// console.log('Fascia d/eta = ' + ageGroup)




