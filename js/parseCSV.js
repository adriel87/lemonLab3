const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

const fromCSV = (csv, nAttrs= Number.MAX_SAFE_INTEGER) => {

    // corregimos la entrada del numero de atributos por la posición del array
    const LIMIT_ATRIBUTES =  nAttrs -1;

    const columns = csv.split('\n')[0].split(',')

    const PersonInformation = csv.split('\n').filter((element,index)=> index>0).map(value=> value.split(','))

    return PersonInformation.map(person=> person.reduce((prev, current, index)=>{

        if (index <= LIMIT_ATRIBUTES) {
            
            return {
                ...prev,
                [columns[index]]:current
            }
        }
        
        return {
            ...prev
        }
    },{}))
    
    
   
}



const result = fromCSV(data,2);
console.log(result);


 /*
        los intentos antes del reduce
    
        return PersonInformation.map((element) => element.map((value,index)=>{
            return {
                [columns[index]]:value
            }
        }))
           
        return PersonInformation.map((person,index)=> {
            const values = Object.values(person);
            return ({
    
                [columns[index]]:values[index]
            })
        })
    
        return new Object(PersonInformation.map((person, index)=>({[columns[index]]:{...person}})))
    
    return PersonInformation.reduce(((prev,current,index)=>{
        return {
            ...prev,
            current
        }
        }))
    
    
    
    
    arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
    return PersonInformation.map(e=> ({...e}))
    
    return 
    
    return{
       [propertie]:value
        */
       
       
       
    