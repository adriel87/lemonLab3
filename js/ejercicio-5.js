/*
## Ejercicio 5

Implementa una función para eliminar valores _falsys_ de una estructura de datos.
Si el argumento es un objeto, deberá eliminar sus propiedades _falsys_.
Si el argumento es un array, deberá eliminar los elementos _falsys_.
Si el argumento es un objeto o un array no deberán ser mutados. Siempre deberá de crear una estructura nueva.
Si no es ni un objeto ni un array deberá de devolver dicho argumento.

*/

const compact = (arg) => {


    if (arg === null) return null

    if(typeof arg !== 'object'){
        return arg;
    }

    if(Array.isArray(arg)){
        return Object.keys(arg).map(key => arg[key]).filter(value=> value!= false)

    }

    if(typeof arg === 'object'){
        if (Object.keys(arg).length === 0) return arg

        return new Object(Object
            .keys(arg)
            .reduce((prev,current)=> arg[current] 
                ? ({
                    ...prev,
                    [current] : arg[current]
                })
                :({
                    ...prev})
                    ,{}))
                }
                    
};

// sin ternario

    // if else
    //     return new Object(Object.keys(arg).reduce((prev,current)=> {
    //         if (arg[current]) {
    //             console.log(current,arg[current]);
    //             return {
    //                 ...prev,
    //                 [current]: arg[current]
    //             }
    //         }else{
    //             return {
    //                 ...prev
    //             }
    //         }
    //     }
    //     ,{}))
        
    // }
console.log(compact('123')); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}