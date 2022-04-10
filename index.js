import getSecret from './getSecret.js';
import setSecret from './setSecret.js';

const date = new Date().toISOString();

console.log('Setting password');
await setSecret(date, 'paper', Math.random().toString());
console.log('Password set');

console.log('Getting password');
console.log(await getSecret(date, 'paper'));
console.log('Password got');
