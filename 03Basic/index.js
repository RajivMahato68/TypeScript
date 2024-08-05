// class User1{
//    public email : string
//    private name:string
//     private readonly city:string = "Jaipur"
//     constructor(email: string, name:string){
//         this.email = email;
//         this.name = name
//     }
// }
var User1 = /** @class */ (function () {
    function User1(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    return User1;
}());
var hitesh = new User1("h@h.com", "hitesh");
