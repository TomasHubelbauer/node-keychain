import setSecret from './setSecret.js';
import getSecret from './getSecret.js';

void async function() {
  const date = new Date().toISOString();

  console.log('Setting password');
  await setSecret(date, 'paper', Math.random());
  console.log('Password set');

  console.log('Getting password');
  console.log(await getSecret(date, 'paper'));
  console.log('Password got');
}()
