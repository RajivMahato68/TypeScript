interface User1 {
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
    // startTrail: () =>string
    startTrail(): string
    getCoupon(couponname:string, value:number): number
}

interface User1{
    githubToken:string
 }


 interface Admin extends User1{
    role:"admin" | "ta" | "learner"

 }

const rajiv:Admin = {dbId:22, email:"h@h.com", userId:2211,
    githubToken:"github",
    role:"admin",
    startTrail: ()=>{
        return "trail starte"
    },
    getCoupon:(name:"hitesh", off:10)=>{
        return 10
    }
}

rajiv.email = "r@r.com"
// rajiv.dbId = 33
