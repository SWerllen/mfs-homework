"use strict"
function Person(name, sex) {
    this.name = name;
    this.sex = sex;
    this.say = function (i) {
            var content=[this.name,this.sex];
            try{
                console.log("I am " + content[i]);
            }catch (e) {
                console.log(e);
            }
    }
}

var person=new Person('werllen','man');
person.say(0)
delete person.name;
person.say(0)

var o = {
    jinma:3,
    get v() { return this.jinma; },
    set v(v) { this.jinma=v;},
};
o.v=2;
console.log(o.jinma)
