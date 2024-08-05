var score = 33;
score = 44;
score = "55";
var rajiv = { name: "rajiv", id: 33 };
rajiv = { username: "hc", id: 334 };
// function getDbId (id:number| string){
//     //making some api calls
//     console.log(`Db id ia : ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
