function Animal(){}
Animal.prototype.eat=function () {
    console.log("Animal is eating!");
}
Animal.prototype.sleep=function () {
    console.log("Animal is sleeping!");
}
function Person() {
    Animal.call(this);
}

function Dog() {
    Animal.call(this);
}

Person.prototype=Object.create(Animal.prototype);
Dog.prototype=Object.create(Animal.prototype);
Person.prototype.eat=function () {
    console.log("Person is eating!");
}

Person.prototype.sleep=function () {
    console.log("Person is sleeping!");
}

Dog.prototype.eat=function () {
    console.log("Dog is eating!");
}

Dog.prototype.sleep=function () {
    console.log("Dog is sleeping!");
}

var person=new Person();
var dog=new Dog();
person.eat();
dog.sleep();