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