// Task4 : Write a JavaScript program that creates a class called University with properties for university
//  names and departments. Include methods to add a department, remove a department, and display all
//  departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  //Method to add a department
  adddepartment(department) {
    if (!this.departments.includes(department)) {
      this.departments.push(department);
      console.log(`${department} department added to ${this.name}.`);
    } else {
      console.log(`${department} department is alredy exists in ${this.name}.`);
    }
  }

  //Method to remove department
  removedepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`${department} department removed from ${this.name}.`);
    } else {
      console.log(`${department} not found.`);
    }
  }

  //Display all depatment's
  displaydepartments() {
    console.log(`Departments in ${this.name}:`);
    if (this.departments.length > 0) {
      this.departments.forEach((dept, i) => {
        console.log(`${i + 1}. ${dept}`);
      });
    } else {
      console.log("No departments are avaliable.");
    }
  }
}


const myUniversity = new University("Parul Univeristy");
myUniversity.adddepartment("Computer Science");
myUniversity.adddepartment("Forenscic");
myUniversity.adddepartment("Agriculture");

myUniversity.displaydepartments();

myUniversity.removedepartment("Forenscic");
myUniversity.removedepartment("Mechanical");

myUniversity.displaydepartments();



