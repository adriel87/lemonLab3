/*
## Ejercicio 3

Con el resultado del ejercicio 2, sustituye la función `logUser` por la siguiente
y modifica el código aplicando las guardas que creas conveniente para corregir
los errores de compilación:
*/

interface Teacher {
    name: string;
    age: number;
    subject: string;
  }
  
  interface Student {
      name:string,
      age:number,
      occupation:string
  }
  
  type User = Teacher | Student
  
  const users: User[]= [
    {
      name: "Luke Patterson",
      age: 32,
      occupation: "Internal auditor",
    },
    {
      name: "Jane Doe",
      age: 41,
      subject: "English",
    },
    {
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    },
    {
      name: "Bruce Willis",
      age: 39,
      subject: "Biology",
    },
  ];
  
  // primera iteración sin funciones
  // es posible realizar una sola validación por el tipo de User
  // que para este ejercicio sera Student o Teacher

  // const logUser = (user: User) => {
  //   let extraInfo: string;
  //   if('occupation' in user ){
  //       extraInfo = user.occupation;
  //   }
  //   else {
  //     extraInfo = user.subject;
  //   }
  //   console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
  // };


  // segunda iteración
  // llevamos las clausulas de guarda a una función
  // en este caso también podemos usar solo una función 
  // pero creo que se ve mas claro si valido tanto para 
  // Student como para Teacher

      /*
    si bien para este ejercicio este bloque funcionaria me parece que 
    tiene mas sentido semántico utilizar las 2 funcionas
    al quedar mas clara la intención del código

    if(isTeacher(user)) extraInfo = user.subject
    else extraInfo = user.occupation
     */
  const logUser = (user : User) => {
    let extraInfo : string = '';

    if(isStudent(user)) extraInfo = user.occupation

    if(isTeacher(user)) extraInfo = user.subject

    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
  }

  const isTeacher = (user : User): user is Teacher => (user as Teacher).subject !== undefined
  const isStudent = (user : User): user is Student => (user as Student).occupation !== undefined