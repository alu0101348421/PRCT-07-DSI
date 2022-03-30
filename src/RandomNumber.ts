/**
 * Clase singleton que genera números aleatorios.
 * @class RandomNumber
 */
export class RandomNumber {
  /**
   * Instancia de la clase RandomNumber.
   * @static
   * @type {RandomNumber}
   */
  private static instance: RandomNumber;
  /**
   * Constructor privado de la clase RandomNumber.
   * @constructor
   * @private
   */
  private constructor() {}
  /**
   * Método estático que devuelve la instancia de la clase RandomNumber.
   * @static
   * @returns {RandomNumber}
   */
  public static getInstance(): RandomNumber {
    if (!RandomNumber.instance) {
      RandomNumber.instance = new RandomNumber();
    }
    return RandomNumber.instance;
  }
  /**
   * Método que devuelve un número aleatorio en punto flotante entre 0 y 1.
   * @returns {number}
   */
  public getRandomFloat(): number {
    return Math.random();
  }
  /**
   * Método que devuelve un número aleatorio en punto flotante entre n y m.
   * @param min {number}
   * @param max {number}
   * @returns {number}
   */
  public getRandomFloatInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  /**
   * Método que devuelve un número aleatorio entero entre n y m.
   * @param min {number}
   * @param max {number}
   * @returns {number}
   */
  public getRandomIntInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}