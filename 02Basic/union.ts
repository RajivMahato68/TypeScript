let score: number | string = 33

score = 44
score = "55"


type User = {
    name:string;
    id:number
}



type Admin = {
    username:string;
    id:number
}

let rajiv:User | Admin = {name: "rajiv",id:33}

rajiv = {username:"hc", id:334}


// function getDbId (id:number| string){
//     //making some api calls
//     console.log(`Db id ia : ${id}`);
    
// }


// getDbId(3)
// getDbId("3")


function getDbId (id:number | string){
   if(typeof id === "string"){
    id.toLowerCase()
   }
   
    
}