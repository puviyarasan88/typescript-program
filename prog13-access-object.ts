type Employee = {
  id: number;
  name: string;
  spouse?: string; // spouse is now optional
};

let employee: Employee = {
  id: 1,
  name: "puvi",
  spouse: "", // Add spouse property
};
console.log(employee.name);
console.log(employee["id"]);
employee.spouse = "Jothi";
console.log(employee);

//deleting spouse property
delete employee.spouse;
console.log(employee);
