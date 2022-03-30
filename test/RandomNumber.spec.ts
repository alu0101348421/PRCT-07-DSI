import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/RandomNumber';

describe('RandomNumber', () => {
  it('Dos objetos RandomNumber deben ser el mismo objeto', () => {
    const randomNumber1 = RandomNumber.getInstance();
    randomNumber1.getRandomFloat();
    const randomNumber2 = RandomNumber.getInstance();
    randomNumber2.getRandomIntInRange(1, 10);
    expect(randomNumber1).to.equal(randomNumber2);
  });
  it('Debe tener un método para obtener un número aleatorio en punto flotante entre 0 y 1', () => {
    const randomNumber = RandomNumber.getInstance();
    const randomFloat = randomNumber.getRandomFloat();
    expect(randomFloat).to.be.a('number');
    expect(randomFloat).to.be.within(0, 1);
  });
  it('Debe tener un método para obtener un número aleatorio en punto flotante entre n y m', () => {
    const randomNumber = RandomNumber.getInstance();
    const randomFloat = randomNumber.getRandomFloatInRange(1, 10);
    expect(randomFloat).to.be.a('number');
    expect(randomFloat).to.be.within(1, 10);
  });
  it('Debe tener un método para obtener un número aleatorio entero entre n y m', () => {
    const randomNumber = RandomNumber.getInstance();
    const randomInt = randomNumber.getRandomIntInRange(1, 10);
    expect(randomInt).to.be.a('number');
    expect(randomInt).to.be.within(1, 10);
  });
});