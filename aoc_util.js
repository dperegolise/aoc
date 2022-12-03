import { readFile, promises } from 'fs';

export async function getInput (day) {
    return await promises.readFile('input/day' + day + '.txt', 'utf8');
}