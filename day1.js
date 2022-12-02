import { readFile } from 'fs';

readFile('./input.txt', 'utf8', (err, data) => {
    let foodArr = data.split('\r\n').map(d => parseInt(d));
    let i = 0;

    let bags = foodArr.reduce((acc, food) => {
        if (!Number.isNaN(food))
            acc[i] = acc[i] != undefined ? acc[i] + food : food;
        else
            i++;
        
        return acc;
    }, []);

    console.log('Biggest Bag: ' + bags.sort().reverse()[0]);
    console.log('Top 3 sum: ' + bags.sort().reverse().slice(0,3).reduce((a,b) => a+b, 0));
});