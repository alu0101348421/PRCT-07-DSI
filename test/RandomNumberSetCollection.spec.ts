import 'mocha';
import {expect} from 'chai';
import {RandomNumberSetCollection} from '../src/RandomNumberSetCollection';

describe('RandomNumberSetCollection', () => {
  let randomNumberSetCollection: RandomNumberSetCollection;
  beforeEach(() => {
    randomNumberSetCollection = new RandomNumberSetCollection(10);
  });
  it('Debe tener un método para obtener un iterador sobre el conjunto de números aleatorios', () => {
    expect(randomNumberSetCollection[Symbol.iterator]).to.be.a('function');
  });
  it('Se debe de poder iterar sobre una colección de números aleatorios', () => {
    for (const randomNumber of randomNumberSetCollection) {
      expect(randomNumber).to.be.a('number');
      expect(randomNumber).to.be.within(1, 10);
    }
  });
});