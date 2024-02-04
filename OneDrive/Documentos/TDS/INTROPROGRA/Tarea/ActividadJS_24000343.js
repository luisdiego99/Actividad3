<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/masolecavo/4/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
// Program to check zodiac sign

var month = parseInt(prompt("Ingrese su MES de nacimiento:"))
var day = parseInt(prompt("Ingrese su DIA de nacimiento:"))

switch(month){
    //Enero
  case 1:
    if (day < 21){
      var signo = "Capricornio";
    } else{ 
      var signo = "Acuario";
    }
    break;
    //Febrero
  case 2:
    if (day < 20){
      var signo = "Acuario";
    } else{
      var signo = "Piscis";
    }
    break;
    //Marzo
  case 3:
    if (day < 21){
      var signo = "Piscis";
    } else{ 
      var signo = "Aries";
    }
    break;
     //Abril
  case 4:
    if (day < 21){
      var signo = "Aries";
    } else{ 
      var signo = "Tauro";
    }
    break;
     //Mayo
  case 5:
    if (day < 21){
      var signo = "Tauro";
    } else{ 
      var signo = "Géminis";
    }
    break;
    //Junio
  case 6:
    if (day < 21){
      var signo = "Géminis";
    } else{
      var signo = "Cáncer";
    } 
    break;
    //Julio
  case 7: 
    if (day < 23){
      var signo = "Cáncer";
    } else{
      var signo = "Leo";
    } 
    break;
    //Agosto
  case 8: 
    if (day < 24){
      var signo = "Leo";
    } else{ 
      var signo = "Virgo";
    } 
    break;
  case 9: 
    //Septiembre
    if (day < 23){
      var signo = "Virgo";
    } else{ 
      var signo = "Libra";
    } 
    break;
    //Octubre
  case 10:
    if (day < 24){
      var signo = "Libra";
    } else{
      var signo = "Escorpio";
    } 
    break;
    //Noviembre
  case 11:
    if (day < 23){
      var signo = "Escorpio";
    } else{ 
      var signo = "Sagitario";
    } 
    break;
    //Diciembre
  case 12:
    if (day < 22){
      var signo = "Sagitario";
    } else{
      var signo = "Capricornio";
    } 
    break;
  default: 
    var signo = "Indefinido. Vuelva a intentar."
    break;
}
    
  
alert("Su signo zodiacal es: " + signo);
// console.log(typeof day)
// console.log(typeof month)


</script>
</body>
</html>