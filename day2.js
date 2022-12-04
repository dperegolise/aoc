import { getInput } from './aoc_util.js';

const input = await getInput(2);
const key = new Map([
    ['X', 'A'],
    ['Y', 'B'],
    ['Z', 'C'],
]);
const shapes = new Map([
    ['A', 1], // rock
    ['B', 2], // paper
    ['C', 3], // scissors
]);

const score = input.split('\r\n')
    .map(m => [shapes.get(m.substring(0,1)), shapes.get(key.get(m.substring(2)))])
    .reduce((acc, m) => {
        return acc + m[1] + (m[0] - m[1] == 1 || m[0] - m[1] == -2 ? 0 : (m[0] == m[1] ? 3 : 6));
    }, 0);

console.log(score);