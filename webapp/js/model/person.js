"use strict"
export class Person {
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    get getName(){
        return this._name;
    }
    set setName(name){
        this._name = name
    }
    get getDateOfBirth(){
        return this._dateOfBirth;
    }
    set setDateOfBirth(dateOfBirth){
        this._dateOfBirth = dateOfBirth;
    }
    toString(){
        return `{name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()}-${this.dateOfBirth.getDate()}}`
    }
}