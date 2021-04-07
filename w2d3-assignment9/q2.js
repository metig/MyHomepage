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

// Solution for the second quation 
const employee = Object.create(Person);
employee.salary = 0.0;
employee.hireDate = new Date();
employee.doJob = function(jobTitle){
    console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
}
const anna = Object.create(employee);

anna.name = "Anna";
anna.salary = 245995.50;
anna.doJob("Programmer");
