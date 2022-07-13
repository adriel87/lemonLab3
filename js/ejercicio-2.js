/*
## Ejercicio 2
 Implementar una funcion `replaceAt` que tome como primer argumento un array, como segundo argumento un índice
 y como tercer argumento un valor y reemplace el elemento dentro del array en el índice indicado.
 **El array de entrada no debe de ser mutado**, eso es, que debes crear un nuevo array sin modificar el existente.
 Utiliza _spread operator_, y `slice` para conseguirlo.
*/

const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";


const replaceAt = (arr, index, newELement) => new Array(...arr.slice(0,index), newELement, ...arr.slice(index+1))


console.log(replaceAt(elements,index,newValue));