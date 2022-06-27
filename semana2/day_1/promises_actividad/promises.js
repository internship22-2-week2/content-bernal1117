/*
//Crear una promesa normal
const miPromesa = new Promise((resolve,reject)=>{
    let estado = false;
    if(estado){
        resolve('Todo en orden')
    }else{
        reject(new Error('Algo ha salido mal'))
    }
});
//Ejecutando una promesa
miPromesa.then(resultado => {
    console.log(resultado)
}).catch(error=>{
    console.log(error);
});
*/
/*//EJEMPLO DE PROMESAS CON FINALLY Y SETIMEOUT 
const promesa = new Promise((resolve,reject)=>{
    let estado = true;
    setTimeout(()=>{
        if(estado){
            resolve('Todo ha salido bien')
        }else{
            reject(new Error('Algo ha salido mal'))
        }
    }, 3000);
})
promesa.then(resultado =>{
    console.log(resultado)
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log('Tarea finalizada')
})
*/

/*//Otra forma de escribir promesa y encadenamiento de promesas 
const OtraPromesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 5)
 });
 OtraPromesa.then(valor1=>{
    console.log(valor1)
    return valor1 * 2;
 }).then(valor2 =>{
    console.log(valor2)
    return valor2 *2;
 }).then(valor3 =>{
    console.log(valor3)
    return valor3 *2;
 })
 */
/*
 //promise.all
 const promesa1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 3000, 'Primer promesa')
  })
  const promesa2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, 'Segunda promesa')
  })
  const promesa3 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, 'Tercer promesa')
  })
  let promesas = [promesa1,promesa2,promesa3];
  Promise.all(promesas).then(resultados=>{
    console.log(resultados)
  }, error =>{
    console.log(error)
  })
  Promise.race(promesas).then(fvalor=>{ //promise.race devuelve la promesa que se ejecute primero
    console.log(fvalor)
  },error =>{
    console.log(error)
  })
  */

  /*//funciones asincronas
  function primerProceso(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 2500, 'Primer proceso')
    })
  }
  function segundoProceso(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 4500, 'Segundo proceso')
    })
  }
  function tercerProceso(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 3000, 'Tercer proceso')
    })
  }
  async function llamarProcesos(){
    let result1 = await primerProceso()
    let result2 = await segundoProceso()
    let result3 = await tercerProceso()
    console.log(result1)
    console.log(result2)
    console.log(result3)
  }
  llamarProcesos();
*/

//FORMA ASINCRONA
const https = require('https');

function requestJsonPlaceholder(){
    return new Promise((resolve,reject)=>{
        https.get('https://flagcdn.com/es/codes.json', (resp) =>{
            let data = '';
            resp.on('data', (chunk) =>{
                data += chunk;
            });
            resp.on('end', ()=>{
                resolve(JSON.parse(data));
            });
        }).on('error',(error)=>{
            reject(error)
        });
    });
}
function requestJsonPost(){
    return new Promise((resolve,reject)=>{
        https.get('https://jsonplaceholder.typicode.com/posts', (resp) =>{
            let data = '';
            resp.on('data', (chunk) =>{
                data += chunk;
            });
            resp.on('end', ()=>{
                resolve(JSON.parse(data));
            });
        }).on('error',(error)=>{
            reject(error)
        });
    });
}
function requestJsonOnePost(){
    return new Promise((resolve,reject)=>{
        https.get('https://jsonplaceholder.typicode.com/posts/2', (resp) =>{
            let data = '';
            resp.on('data', (chunk) =>{
                data += chunk;
            });
            resp.on('end', ()=>{
                resolve(JSON.parse(data));
            });
        }).on('error',(error)=>{
            reject(error)
        });
    });
}

async function realizarPeticion(){
    let mostrar1 = await requestJsonPlaceholder()
    let mostrar2 = await requestJsonPost()
    let mostrar3 = await requestJsonOnePost()
    console.table(mostrar1)
    console.table(mostrar2)
    console.table(mostrar3)
}

realizarPeticion();