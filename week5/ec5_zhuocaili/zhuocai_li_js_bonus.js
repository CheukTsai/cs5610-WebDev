const dice = {
    number: 0,
    sides: 0
}

function collectData(str) {
    let d = false;
    dice.number = 0;
    dice.sides = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === 'd') {
            d = true;
        } else{
            if (d === false) {
                dice.number = dice.number * 10 + Number(str.charAt(i));
            } else {
                dice.sides = dice.sides * 10 + Number(str.charAt(i));
            }
        } 
    }
}

const rollDice = function(str) {
    collectData(str);
    let output = 0;
    for(let i = 0; i < dice.number; i++) {
        output +=Math.ceil( Math.random() * dice.sides);
    } 
    return output;
}

const inputArr = ['3d6', '4d12', '1d10', '5d4']

for(input of inputArr) {
    console.log(input);
    console.log(rollDice(input));
}
