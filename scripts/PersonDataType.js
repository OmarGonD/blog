function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
    
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
    
    this.greet = function (person) {
        alert("Hello, " + person.getFullName());
    }
}


var person1 = new Person("Omar", "Gonzáles");

var person2 = new Person("Valentina", "B")


person1.greet(person1);

