const employee = function () {
    let name;
    let age;
    let salary;
    const setAgeFunc = function (newAge) {
        age = newAge;
    }
    const setSalaryFunc = function (newSalary) {
        salary = newSalary;
    }
    const setNameFunc = function (newName) {
        name = newName;
    }
    const getNameFunc = function () {
        return name;
    }
    const getAgeFunc = function () {
        return age;
    }
    const getSalaryFunc = function () {
        return salary;
    }
    const increaseSalary = function (percentage) {
        incsalary = getSalaryFunc();
        update = incsalary + incsalary * percentage;
        setSalaryFunc(update);
    }
    function increamentAge() {
        upadateAge = getAgeFunc() + 1;
        setAgeFunc(upadateAge);
    }
    return {
        setAge: setAgeFunc,
        setSalary: setSalaryFunc,
        setName: setNameFunc,
        getName: getNameFunc,
        getAge: getAgeFunc,
        getSalary: getSalaryFunc,
        updatesalary: increaseSalary,
        updateage: increamentAge
    }
}

// Question 11 answer code below
employee.extension = function setAddress(newAddress) {
    let address;
    address = newAddress;
};
employee.extension = function getAddress() {
    return address;
};
var me = {
    first: 'Josh',
    last: 'Splinter',
    getFullName: function () {
        return this.first + ' ' + this.last;
    }
};

var you = {
    first: 'William',
    last: 'Smith'
};

console.log(me.getFullName.apply(you)); //William Smith

console.log(me.getFullName.call(you)); //William Smith

const nm = me.getFullName.bind(you);

console.log(nm()); //William Smith

