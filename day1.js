import { getInput } from './aoc_util.js' ;

const input = await getInput(1);

let foodArr = input.split('\r\n').map(d => parseInt(d));
let i = 0;

let bags = foodArr.reduce((acc, food) => {
    if (!Number.isNaN(food))
        acc[i] = acc[i] != undefined ? acc[i] + food : food;
    else
        i++;
    
    return acc;
}, []).sort().reverse();

console.log('Biggest Bag: ' + bags[0]);
console.log('Top 3 sum: ' + bags.slice(0,3).reduce((a,b) => a+b, 0));