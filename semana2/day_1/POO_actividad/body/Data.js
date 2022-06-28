import fs from "fs";

export class Data {
  constructor(path) {
    this._path = path;
  }

  readJsonFile() {
    let contentFile = fs.readFileSync(this._path, "utf-8");
    if (contentFile) {
      return JSON.parse(contentFile);
    }
    return { descripcion: "ESTOS SON LOS PEDIDOS",
   pedidos: [] };
  }

  writeJsonFile(data) {
    let strData = JSON.stringify(data, null, 2);
    fs.writeFileSync(this._path, strData);
  }

  getAll() {
    return this.readJsonFile();
  }

  guardar(pedido) {
    let data = this.readJsonFile();
    data.pedidos.push(pedido);
    this.writeJsonFile(data);
  }

  delete(id) {
    let data = this.readJsonFile();
    let newData = data.pedidos.filter((pedido) => pedido._id !== id);
    data.pedidos = newData;
    this.writeJsonFile(data);
  }


}