class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(username, salary, position, department) {
    if (!username || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }
    let newEmployee = {
      username: username,
      salary: Number(salary),
      position: position,
    };
    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push(newEmployee);
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }
  bestDepartment() {
    let department = "";
    let maxSalary = 0;
    Object.entries(this.departments).forEach(([key, value]) => {
      let salary = 0;
      value.forEach((e) => {
        salary += e.salary;
      });
      salary = salary / value.length;
      if (salary > maxSalary) {
        department = key;
        maxSalary = salary;
      }
    });
    if (department != "") {
      let result = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(
        2
      )}\n`;
      Object.values(this.departments[department])
        .sort(
          (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
        )
        .forEach((e) => {
          let em = `${e.username} ${e.salary} ${e.position}\n`;
          result += em;
        });
      return result.trim();
    }
  }
}

// Write a class Company, which following these requirements:
// The constructor takes no parameters:
// You could initialize an object:
//  departments - empty object
// addEmployee({username}, {Salary}, {Position}, {Department})
// This function should add a new employee to the department with the given name.
//  If one of the passed parameters is empty string (''), undefined or null, this function should throw an error
// with the following message: &quot;Invalid input!&quot;
//  If salary is less than 0, this function should throw an error with the following message: &quot;Invalid input!&quot;
//  If the new employee is hired successfully, you should add him into the departments array and return the
// following message: New employee is hired. Name: {name}. Position: {position}
// bestDepartment()
// This function should return the department with the highest average salary rounded to the second digit after
// decimal point and its employees sorted by their salary by descending order and by their name in ascending order as
// a second criteria:

// Best Department is: {best department&#39;s name}
// Average salary: {best department&#39;s average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}
