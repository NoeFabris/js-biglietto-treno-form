var km = prompt("Distance to travel in km");
var age = prompt("Your Age");
console.log(km);
console.log(age);

if ((km > 0) && (age >= 0)) {
    if (age < 18) {
        var price = km * 0.21;
        var price20 = (price - (price * 20 / 100)).toFixed(2);
        console.log(price20);
        document.getElementById('price').innerHTML= price20 ;
    } else {
        if (age < 65) {
            var price = km * 0.21;
            console.log(price);
            document.getElementById('price').innerHTML= price ;
        } else {
            var price = km * 0.21;
            var price40 = (price - (price * 40 / 100)).toFixed(2);
            console.log(price40);
            document.getElementById('price').innerHTML= price40 ;
        }
    }
} else {
    if (isNaN(km) && isNaN(age)) {
        document.getElementById('price').innerHTML= "Please use numbers" ;
    } else if (isNaN(age)) {
        document.getElementById('price').innerHTML= "Please insert AGE in numbers" ;
    } else {
        document.getElementById('price').innerHTML= "Please insert KM in numbers" ;
    }
}


