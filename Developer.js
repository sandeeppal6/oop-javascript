// const Emp = require("./Employee");
const { Employee } = require("./Employee");

class Developer extends Employee {
  constructor(id, name, dept, exp) {
    super(id, name, dept);
    this.exp = exp;
  }

  getDeveloperDetail() {
    return `${this.getEmployeeDetails()}, Exp: ${this.exp}`;
  }
}

const develoer = new Developer(10, "sandeep", "development", 5);

console.log(develoer.getDeveloperDetail());
