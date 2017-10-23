
window.onload = function () {   /*Espera que todos los elementos, incluidos imágenes carguen.
                                Investigar DOMContentready, es más rápido */
    
btn1 = document.getElementById("mybtn")
btn1.addEventListener("click", function () {

    
function getMonthName(index) {
  var months = ["enero", "febrero", "marzo",
    "abril", "mayo", "junio", "julio", "agosto",
    "setiembre", "octubre", "noviembre", "diciembre"
  ];
  return months[index];
}


/*function abbrName(text) {
  return text.substr(0, 3);
}*/

var date = new Date();

var messageParts = [
  "Hola, ",
  prompt("Por favor, ingresa tu nombre", "Por favor, ingresa tu nombre"),
  ". Hoy es el ",
  date.getDate(),
  " de ",
  /*abbrName(getMonthName(date.getMonth())),*/
  getMonthName(date.getMonth()),
  " del ",
  date.getFullYear(),
    "."
];
                                            
alert(messageParts.join(""));}, false);
    
}