"use strict"
export class Employee extends Person {
    constructor(salary, hireDate){
        super();
        this.salary = salary;
        this.hireDate = hireDate;
    }
    get salary(){
        return this._salary
    }
    set salary(amount){
        this._salary = amount;
    }

    get hireDate(){
        this._hireDate;
    }
    set hireDate(date){
        this._hireDate = date;
    }

    doJob(jobTitle){
        console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
    }
   
}