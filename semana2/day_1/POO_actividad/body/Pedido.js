import { Computadora } from "./Computadora.js";

export class Pedido {
  static Pedidos = 0;
  constructor({ id }) {
    Pedido.Pedidos++;
    this._computadoras = [];
    this._id = id;
  }

  Agregar(computadora) {
    if (computadora instanceof Computadora) {
      this._computadoras.push(computadora);
    }
  }

  static mostrarPedido(pedido) {
    console.info(`Pedido no.${pedido._id}`);
    pedido._computadoras.forEach((c) => console.table(c));
  }
}