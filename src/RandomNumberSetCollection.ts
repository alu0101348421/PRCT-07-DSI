import {RandomNumber} from './RandomNumber';

/**
 * Clase que utiliza un Set para almacenar números aleatorios.
 * @class RandomNumberSetCollection
 * @implements {Iterable<number>}
 */
export class RandomNumberSetCollection implements Iterable<number> {
  /**
   * Conjunto de números aleatorios.
   * @type {Set<number>}
   * @private
   */
  private randomNumbers: Set<number>;
  /**
   * Constructor de la clase RandomNumberSetCollection.
   * @param size {number} Tamaño del conjunto.
   */
  constructor(size: number) {
    this.randomNumbers = new Set<number>();
    for (let i = 0; i < size; i++) {
      this.randomNumbers.add(RandomNumber.getInstance().getRandomIntInRange(1, 10));
    }
  }
  /**
   * Método que devuelve un iterador sobre el conjunto de números aleatorios.
   * @returns {Iterator<number>}
   */
  [Symbol.iterator](): Iterator<number> {
    return this.randomNumbers[Symbol.iterator]();
  }
}