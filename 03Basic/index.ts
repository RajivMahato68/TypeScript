// class User1{
//    public email : string
//    private name:string
//     private readonly city:string = "Jaipur"
//     constructor(email: string, name:string){
//         this.email = email;
//         this.name = name
//     }
// }
class User12{
    readonly city:string = "Jaipur"
    constructor(
        public email: string, 
        public name:string,
        // private userId: string
    ){
        this.email = email;
        this.name = name
    }
}
const hitesh1 = new User12("h@h.com","hitesh")