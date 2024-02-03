function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var usuario1;
var compu1;
var resultadoNuevo
var resultadoRonda2;
//estas variables demuestran las cartas del PC y la suma de ellas
var cartaCompu1 = getRandomIntInclusive(1,11);
var cartaCompu2 = getRandomIntInclusive(1,11);
var resultadoCompu1 = cartaCompu1+cartaCompu2;
console.log(cartaCompu1);
console.log(cartaCompu2);
console.log(resultadoCompu1);
//con las siguientes variables definimos las cartas del usuario y la suma de ellas
var cartaUsuario1 = getRandomIntInclusive(1,11);
var cartaUsuario2 = getRandomIntInclusive(1,11);
alert("Su primera carta es " + cartaUsuario1);
alert("Su segunda carta es " + cartaUsuario2);
var resultadoUsuario1 = cartaUsuario1 + cartaUsuario2;

usuario1 = prompt("Â¿Desea otra carta? Actualmente el valor de sus cartas suma "+ resultadoUsuario1);
if(usuario1 === "si") {
    var cartaUsuario3 = getRandomIntInclusive(1,11);
    resultadoRonda2 = resultadoUsuario1 + cartaUsuario3;    
    alert("Su nueva carta vale " + cartaUsuario3, " su total es " + resultadoRonda2);

    while (usuario1 === "si" && resultadoRonda2 <=21){
        usuario1 = prompt("Â¿Desea otra carta? Actualmente el valor de sus cartas suma " + resultadoRonda2);
        if(usuario1 === "si") {
            var cartaUsuario3 = getRandomIntInclusive(1,11);
            resultadoRonda2 = resultadoRonda2 + cartaUsuario3;
            alert("Su nueva carta vale " + cartaUsuario3 + " su total es " + resultadoRonda2);
        }
        if(resultadoRonda2 > 21){
            alert("Su numero es "  + resultadoRonda2 +  " , mayor a 21, perdio") 
        }
        else if(usuario1 === "no"){
            alert ("La PC tiene como resultado " + resultadoCompu1);
            if (resultadoCompu1 > resultadoUsuario1){
                alert("Lastima ha perdido");
            } else if (resultadoCompu1 < resultadoUsuario1){
                alert("Enhorabuena, ha ganado");
            } else if (resultadoCompu1 = resultadoUsuario1){
                alert ("empate");
            }
        }
    }
} else if (usuario1 === "no"){
    alert("La computadora tiene " + resultadoCompu1);
    alert("Usted tiene " + resultadoUsuario1)
    if (resultadoCompu1 > resultadoUsuario1){
        alert("Lastima ha perdido");
    } else if(resultadoCompu1 < resultadoUsuario1){
        alert ("Enhorabuena, ha ganado");
    } else if (resultadoCompu1 = resultadoUsuario1) {
        alert ("Empate")
    }
}

