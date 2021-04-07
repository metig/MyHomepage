const Person = {
    name: " ", 
    dateOfBirth: null,
    getName: function(){
        return this.name;
    },
    setName: function(name){
        this.name = name;
    }   
}
const personName = Object.create(Person);
personName.setName("Jone");
personName.dateOfBirth = new Date('December 10, 98')

console.log(`Name of the Person ${personName.getName()} \n`)
console.log(`${personName.name} was born on ${personName.dateOfBirth.getFullYear()}-${personName.dateOfBirth.getMonth()}-${personName.dateOfBirth.getDate()}`)
