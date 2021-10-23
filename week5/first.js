// let fruitColorObj = {
//     apple: "green",

// }

// fruitColorObj.apple = "blue";

// fruitColorObj 

// const arr = [
//     "a","b" 
// ]

// const b = arr[1];


let k = myfunction(1);
function myfunction(num) {
    return num + 100;
}


const add100 = function(num) {
    return num+100;
}

const ans = add100(100);

ans

const returnwtf = function(func) {
    return func()
}

const return100 = function(){
    return 100;
}

const output = returnwtf(return100);
output


const myName = 'zhuocai';

const welcomeText = `
    hello
    my name is
    ${myName}
`

welcomeText


function welcome(YourName = 'abc') {
    return `my name is ${YourName}`;
}

const print = welcome() 

print


/*
Followings are false:

false
undefined
null
0
NaN
the empty string ("")
*/


let bananaCount = true;
let banana

if(bananaCount) {
    banana = 'green'
} else {
    banana = 'yellow'
}

banana

