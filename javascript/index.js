const question1 = () => {
    let MAX_SIZE = 25*1024*1024;
    let title = "Hello World";
    title = "Hello ES6"
}

const question2 = () => {
    let user = { name: 'David' };
    let card = {amount: 7, product: "Bar", unitprice: 42};
    let message = `Hello ${user.name}
want to buy ${card.amount} ${card.product} for
a total of ${(card.amount * card.unitprice)} bucks?;`
}

const question3 = () => {
    function foo(x, y, ...a) {
        return (x + y) * a.length;
    };
    foo(1, 2, 'hello', true, 7) === 9;
}
const question4 = () => {
    function sum(x, y = 7, z = 42) {
        return x + y + z;
    };
}
const question5 = () => {
    let evens = [1, 2, 3, 4, 5, 6];
    let odds = evens.map((v) => { return v + 1; });
    let pairs = evens.map((v) => { return { even: v, odd: v + 1 }; });
    let nums = evens.map((v, i) => { return v + i; });
    let fives = [];
    nums.forEach((v) => {
        if (v % 5 === 0) {
            fives.push(v);
        }
    });
}
const question6 = () => {
    class Shape {
        constructor(id, x, y){
            this.id = id;
            this.move(x, y);
        }
        move(x, y){
            this.x = x;
            this.y = y;
        }
    }
}
//question 7
// lib/utils.js
Utils = {};
Utils.sum = function(x, y) { return x + y };
Utils.pi = 3.141593;
export {Utils};

// someApp.js
import {Utils} from 'lib/utils.js'
console.log("2π = " + Utils.sum(Utils.pi, Utils.pi));

// otherApp.js
import {Utils} from 'lib/utils.js'
console.log('2π = ' + sum(Utils.sum, Utils.pi));


// question 8
const showMessAfterTimeout = (msg, who, timeout) =>{
    return new Promise((resolve) => {
        return setTimeout(() => {
            return resolve(`${msg} Hi ${who}!`);
        }, timeout);
    });
}
showMessAfterTimeout('', 'Foo', 100)
    .then((msg) => {
        return showMessAfterTimeout(msg,'Bar', 200).then((newMsg) => {
            return newMsg;
        });
    })
    .then((finalMsg) => console.log(`Finish after 300ms: ${finalMsg}`))
    .catch((e)=>{/** Do something if error */});

const question9 = () => {
    const a = ['a', 'b', 'c',['d', 'e', 'f', ['g','h','i']]];
    for (const e of a) {
    console.log(e);
    }

    const ages = [3, 10, 18, 20, 21, 23, 41, 1, 4];
    ages[ages.findIndex((e) => {return e > 18;})];
}