window.onload = function () {

    
    
    
    
    function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;

            this.getFullName = function() {
                return this.firstName + " " + this.lastName;
            };

            this.greet = function(person) {
                alert("¡Hola, " + person.getFullName() + "!");
            };
        }

        var person1 = new Person("Ana", "Ivanovic");
        var person2 = new Person("Roger", "Federer");
    
    
    
    
    

    document.getElementById("clickMeAna").onclick = function () {

        var anaphoto = document.getElementById('ana');
        /*anaphoto.addEventListener("mouseover", mouseonana, false);
        anaphoto.addEventListener("mouseout", mouseoutana, false);*/
        anaphoto.src = "../images/anasunset.jpg";
        
        
        person2.greet(person1);
        alert("Ana: ¡Hola! Sé que no estoy jugando a mi mejor nivel, pero me siento bastante optimista de cara al  U.S Open 2016. ¡Espero verte allí!");
          
    };
    
    
    document.getElementById("clickMeRoger").onclick = function () {

        person1.greet(person2);
        
        
        
        var rogerphoto = document.getElementById('roger');
        /*anaphoto.addEventListener("mouseover", mouseonana, false);
        anaphoto.addEventListener("mouseout", mouseoutana, false);*/
        rogerphoto.src = "../images/rogersunset2.jpg";
            

        
        alert("Roger: ¡Hola! ¡Disfruta de mis partidos, nos vemos en el U.S. Open 2016!");
        
    };
    
    
    
}
 
    

/* 

    Original Code:



    function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;

            this.getFullName = function() {
                return this.firstName + " " + this.lastName;
            };

            this.greet = function(person) {
                alert("¡Hola, " + person.getFullName() + "!");
            };
        }

    var person1 = new Person("Ana", "Ivanovic");
    var person2 = new Person("Roger", "Federer");

*/ 
 
 
