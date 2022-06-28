import { Computadora } from "./Computadora.js";
import { Pedido } from "./Pedido.js";
import { keypad, mouse} from "./Entrada.js";
import { pantalla } from "./Monitor.js";


const mouse1 = new mouse({ marca: "HP mouse", id: 1 });
const mouse2 = new mouse({ marca: "Samsung mouse", id: 2 });
const mouse3 = new mouse({ marca: "Razer mouse", id: 3 });
const monitor1 = new pantalla({ id: 1, marca: "HP", resolucion: "3K" });
const monitor2 = new pantalla({ id: 2, marca: "Samsung", resolucion: "3k" });
const monitor3 = new pantalla({ id: 3, marca: "Razer", resolucion: "3k" });
const keypad1 = new keypad({ marca: "HP keypad", id: 1 });
const keypad2 = new keypad({ marca: "Samsung keypad", id: 2 });
const keypad3 = new keypad({ marca: "Razer keypad", id: 3 });


const computadora1 = new Computadora({
  id: 1,
  name: "GAMERPRO",
  keypad: keypad1,
  mouse: mouse1,
  monitor: monitor1,
});

const computadora2 = new Computadora({
  id: 2,
  name: "Oficina",
  keypad: keypad2,
  mouse: mouse2,
  monitor: monitor2,
});

const computadora3 = new Computadora({
  id: 3,
  name: "GAMERPRO",
  keypad: keypad3,
  mouse: mouse3,
  monitor: monitor3,
});


const pedido1 = new Pedido({ id: 1 });
pedido1.Agregar(computadora1);

const pedido2 = new Pedido({ id: 2 });
pedido2.Agregar(computadora2);

const pedido3 = new Pedido({ id: 3 });
pedido3.Agregar(computadora3);

export default [pedido1, pedido2, pedido3];