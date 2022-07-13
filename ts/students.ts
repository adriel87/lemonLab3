// ## Ejercicio 1

// Dados el siguiente snippet de código, crea la interfaz `Student` y úsala para sustituir los `unknown`:




interface Student {
    name:string,
    age:number,
    occupation:string
}


const students: Student[] = [
  {
    name: "Patrick Berry",
    age: 25,
    occupation: "Medical scientist",
  },
  {
    name: "Alice Garner",
    age: 34,
    occupation: "Media planner",
  },
];

const logStudent = ({ name, age }: Student) => {
  console.log(`  - ${name}, ${age}`);
};

console.log("Students:");
students.forEach(logStudent);