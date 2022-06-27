class Person{
    constructor(Person){
        this._name = Person.name
        this._age = Person.age
        this._address = Person.address
    }
}

export class Student extends Person{
    constructor(Student){
        super(Student) //Para poder heredar sus propiedades y metodos de la clase padre
        this._grade = Student.grade
    }
    greet(){
        console.log(`Hello im ${this._name} and im a student`)
    }
}

export class Teacher extends Person{
    constructor(Teacher){
        super(Teacher) //Para poder heredar sus propiedades y metodos de la clase padre 
        this._course = Teacher.course
    }
    greet(){
        console.log(`Hello im ${this._name} and im a teacher`)
    }
}