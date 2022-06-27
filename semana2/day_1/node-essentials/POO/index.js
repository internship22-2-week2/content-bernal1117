import { Student,Teacher } from "./entity/Person.js";
import { Data } from "./entity/Data.js";


class Register{
    constructor(){
        this._data = new Data();
    }
    register(person){   // <----- METODO
        let newPerson = null;
        if(person.grade){
        newPerson = new Student(person);
        }else{
        newPerson = new Teacher(person);
        }
        this._data.save(newPerson)
        console.log(newPerson)
        this.greeting(newPerson)
    }
    greeting(instance){
        instance.greet();
    }
    showData(){
        let data = this._data.getAll();
        console.table(data);
    }
    deletePerson(name){
        let data = this._data.destroy(name)
    }
}

let student1 = {
    name: 'Daniel',
    age: 21,
    address: 'guatemala',
    grade: 'JS'
}
let teacher1 = {
    name: 'Eduardo',
    age: 25,
    address: 'guatemala',
    course: 'JavaScript'
    
}
const registerPerson = new Register();
registerPerson.register(teacher1)
registerPerson.showData();