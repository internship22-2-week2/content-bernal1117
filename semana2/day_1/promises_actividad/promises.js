//ACTIVIDDAD PROMISES
<<<<<<< HEAD
 const https = require('https');
 //ACTIVIDDAD PROMISES
//import https from 'https';
=======
import https from 'https';
>>>>>>> 46a4b81a673f52db9b29180fc75005c8ae8235d4

function requestLink(endpoint){
    return new Promise((resolve, reject) =>{
        https.get(endpoint, (result) =>{
            let data = ""
            result.on("data", (chunk) =>{
                data += chunk
            })
            result.on("end", ()=>{
                resolve(JSON.parse(data));
            });

            }).on("error", (error)=>{
                reject(error)
            console.log('statusCode:', result.statusCode);
    
        })
    })
}

const promise1 = requestLink("https://flagcdn.com/es/codes.json")
const promise2 = requestLink("https://jsonplaceholder.typicode.com/posts")
const promise3 = requestLink("https://jsonplaceholder.typicode.com/posts/2")

async function request(link){
    const data = await requestLink(link)
    console.log(data)
}

 //promise.all
Promise.all([promise1, promise2, promise3]).then(resultado=>{
    console.log(resultado);
}).catch(error=>{
    console.log(error)
}) 
 
<<<<<<< HEAD
/*
=======

>>>>>>> 46a4b81a673f52db9b29180fc75005c8ae8235d4
//promise.race
 Promise.race([promise1, promise2, promise3]).then(resultado=>{
    console.log(resultado);
}).catch(error=>{
    console.log(error)
})  

//asincronica
request("https://flagcdn.com/es/codes.json")
request("https://jsonplaceholder.typicode.com/posts")
request("https://jsonplaceholder.typicode.com/posts/2")
 
<<<<<<< HEAD
*/
=======
>>>>>>> 46a4b81a673f52db9b29180fc75005c8ae8235d4
