class Entrada {
    constructor({ marca, id, tipo }) {
      this._marca = marca;
      this._id = id;
      this._tipo = tipo;
    }
  
    get marca() {
      return this._marca;
    }
  
    get id() {
      return this.id;
    }
  
    get tipo() {
      return this._tipo;
    }
  }
  
  export class mouse extends Entrada {
    static mouses = 0;
    constructor({ marca, id,tipo = "TIPO C" }) {
      super({ marca, id, tipo });
      mouse.mouses++;
    }
  }
  
  export class keypad extends Entrada {
    static keypads = 0;
    constructor({ marca, id ,tipo = "TIPO C"}) {
      super({ marca, id ,tipo});
      keypad.keypads++;
    }
  }