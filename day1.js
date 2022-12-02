import { readFile } from 'fs';

readFile('./input.txt', 'utf8', (err, data) => {
    let foodArr = data.split('\r\n').map(parseInt);

    let bags = foodArr.reduce((acc, food) => {
        if (!Number.isNaN(food)) {
            return {
                ...acc,
                current: acc.current + food
            }
        } else {
            return {
                current: 0,
                biggest: acc.current > acc.biggest ? acc.current : acc.biggest
            }
        }
    }, { biggest: 0, current: 0 });

    console.log('Biggest Bag: ' + bags.biggest);
});