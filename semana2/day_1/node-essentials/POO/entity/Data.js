import fs from 'fs';

export class Data{
    constructor(){
        this._path = './data.json';
    }
    readJsonFile(){ //<---- metodo
       let contentFile = fs.readFileSync(this._path,'utf-8')
       if(contentFile){
        return JSON.parse(contentFile)
       }
       return[];
    }
    writeJsonFile(data){
       let jsonData = JSON.stringify(data,null,'')
       fs.writeFileSync(this._path, jsonData);
    }
    save(person){
        let data = this.readJsonFile();
        data.push(person);
        this.writeJsonFile(data);
    }
    getAll(){
        return this.readJsonFile();
    }
    destroy(){
        let data = this.readJsonFile();
        let newData = data.filter(person => person._name !== name);
        this.writeJsonFile(newData);
    }

}