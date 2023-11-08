let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: "
            + this.ename + "-->Salary: "
            + this.salary;
    }
}


let employee2 = employee // shallow copy

let employee3 = JSON.parse(JSON.stringify(employee)) // deep copy - but doesn't copy function 'details'
// to make deep copy and also copying non-serializable properties , libraries like lodash are used (lodash.cloneDeep()) 

console.log(employee2)

console.log(employee3)