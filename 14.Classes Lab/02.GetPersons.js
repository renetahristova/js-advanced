function GetPerson() {
  let namesArr = [
    ["Anna", "Simpson", 22, "anna@yahoo.com"],
    ["SoftUni"],
    ["Stephan", "Johnson", 25],
    ["Gabriel", "Peterson", 24, "g.p@gmail.com"],
  ];
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString = () => {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    };
  }

  return namesArr.map((x) => new Person(...x));
}
console.log(GetPerson());
