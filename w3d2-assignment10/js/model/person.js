class  Person{
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getDateOfBirth(){
        return this.name;
    }
    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }
    toString(name,dateOfBirth){
        return `Name:${name}, DateOfBirth: ${dateOfBirth}`
    }
}
console.log(Person.toString)