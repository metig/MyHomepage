"use strict"

import { Person} from "./model/person.js";
import {Employee} from "./model/employee.js";

const persons = [
    new Person("Ana Smith", new Date(1998, 12, 15)),
    new Person("Bob Jone", new Date(19451, 1, 16)),
    new Person("Carlos Slim Helu", new Date(1976, 09, 24))
];

for(let per of persons){
    console.log(per.toString())
}

const employee = new Employee()
employee.setName("Jim Hanson");
employee.setSalary(245,990.00);

console.log(employee.doJob("Software Engineer"));