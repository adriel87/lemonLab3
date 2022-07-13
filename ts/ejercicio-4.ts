// ## Ejercicio 4

// Utilizando las misma interfaz de `Student`, de los ejercicios anteriores
// arregla los errores de TypeScript para podamos pasar aquellos criterios que
// necesitemos sin tener que pasar toda la información de un `Student`.
// Arregla los subsiguientes errores que aparezcan al asignar tipo a `criteria`.

interface Student{
    name:string,
    age:number,
    occupation:string
}


// primera iteracion sin usar Partial<T>
// cree un tipo con toda la estructura de Student con sus propiedades opcionales
// aunque esto funciona no me terminaba de gustar
type Criteria = {
    name?: string,
    age?:number,
    occupation?:string
}




const students: Student[] = [
  {
    name: "Bruce Wayne",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Emily Coleman",
    age: 25,
    occupation: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    occupation: "Placement officer",
  },
];

const filterStudentsBy = (students: Student[], criteria: Partial<Student>): Student[] => {
  return students.filter((student) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => {
      return criteria[fieldName] === student[fieldName];
    });
  });
};

const logStudent = ({ name, occupation }: Student) => {
  console.log(`  - ${name}, ${occupation}`);
};

console.log("Students of age 35:");
filterStudentsBy(students, { age: 35 }).forEach(logStudent);