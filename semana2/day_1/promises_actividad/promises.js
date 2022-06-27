//ACTIVIDDAD PROMISES
 const https = require('https');
 
 const promesa1 = new Promise((resolve, reject) => { 
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
const promesa2 = new Promise((resolve, reject) => { 
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
const promesa3 = new Promise((resolve, reject) => { 
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

  let promesas = [promesa1,promesa2,promesa3];
  //promise.all
  Promise.all(promesas).then(resultados=>{
    console.log(resultados)
  }, error =>{
    console.log(error)
  })

 //promise.race
  Promise.race(promesas).then(fvalor=>{ //promise.race devuelve la promesa que se ejecute primero
    console.table(fvalor)
  },error =>{
    console.log(error)
  })
  

//FORMA ASINCRONA
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
