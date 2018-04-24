// ES5
// function Greeting () {
//     this.wordHello = 'Hello';
// }

// Greeting.prototype.hello = function(name) {
//     return this.wordHello +  ' ' + name;
// };

// var greet = new Greeting();

// ES6
class Greeting {
    constructor(){
        this.wordHello = 'Hello';

    }

    hello(name){
        return this.wordHello +  ' ' + name;        
    }
}

var greet = new Greeting();
console.log(greet.hello('Alex Lee'));