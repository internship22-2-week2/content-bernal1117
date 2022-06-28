import { Data } from "./body/Data.js";
import  Stack  from "./body/Stack.js";
import { Pedido } from "./body/Pedido.js";

class Add {
  constructor() {
    this.data = new Data("./data.json");
  }
  registerPedido(pedido) {
    this.data.guardar(pedido);
  }
  
  delete(id) {
    this.data.delete(id);
  }

  showPedido() {
    this.data.getAll().pedidos.forEach((pedido) => {
      Pedido.mostrarPedido(pedido);
    });
  }
}

const add = new Add();
Stack.forEach((pedido) => {
  add.registerPedido(pedido);
});

add.showPedido();

