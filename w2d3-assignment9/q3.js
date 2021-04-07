function Person(name, birthDate){
    this.name = name;
    this.birthDate = birthDate;
}

Person.prototype.toString = function personToStiring(){
    return `{Name: ${this.name} , DateOfBirth: ${this.birthDate.getFullYear()}-${this.birthDate.getMonth()}-${this.birthDate.getDate()}}`
}
const personName = new Person("Jone", new Date('December 10, 1998'));
console.log(personName.toString())
const secondPerson = new Person("Peter", new Date("November 10, 1985"));

console.log(secondPerson.toString());

