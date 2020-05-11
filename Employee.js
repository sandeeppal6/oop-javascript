class Employee {
  constructor(id, name, dept) {
    this.id = id;
    this.name = name;
    this.dept = dept;
  }

  getEmployeeDetails() {
    return `Employee id : ${this.id}, Name: ${this.name}, Dept: ${this.dept}`;
  }
}

// const emp = new Employee(10, "Sandeep", "Development");

// console.log(emp.getEmployeeDetails());

// module.exports = Employee;

module.exports = { Employee };
