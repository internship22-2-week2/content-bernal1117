export class pantalla {
    static Monitores = 0;
    constructor({ id, marca, tamano }) {
      pantalla.Monitores++;
      this._id = id;
      this._marca = marca;
      this._tamano = tamano;
    }
  }