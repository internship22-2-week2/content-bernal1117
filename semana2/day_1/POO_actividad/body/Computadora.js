export class Computadora {
    static Computadoras = 0;
    constructor({ id, name, monitor, keypad, mouse }) {
      Computadora.Computadoras++ ;
      this._id = id;
      this._name = name;
      this._monitor = monitor;
      this._keypad = keypad;
      this._mouse  = mouse;
    }
  }