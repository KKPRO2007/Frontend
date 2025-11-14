// const Person = function (name, age){
//     this.fristName= name;
//     this.age = age;
//     this.birthYear= 2025- age;
// };

// Person.prototype.intro = function (){
//     console.log(`hey my name is ${this.fristName}, and i am ${this.age} years old, i was born in ${this.birthYear}`);
// };

// const ppl1 = new Person ("krishna", 18);
// console.log(ppl1);
// ppl1.intro();

class Person {
    constructor(name, age) {
        this.firstName = name;
        this.age = age;
        this.birthYear = 2025 - age;
    }
    intro() {
        console.log(`Hey, my name is ${this.firstName}, and I am ${this.age} years old`);
    }
}
const p1 = new Person("Krishna", 18);
p1.intro();
