// const User = {
//     name: "hitesh",
//     email: "hitesh@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name:"hiteh", isPaid:false, email:"h@h.com"}

// createUser(newUser)





// function createCourse():{name: string , price: number}{
//     return {name: "reactjs", price:399}
// }



// type User = {
//     name:string;
//     email:string;
//     isActive:boolean
// }


// function createUser(user:User):User{
//     return{name: "", email:"", isActive:true}
// }

// createUser({name: "", email:"", isActive:true})


// use of readonly keyword

type User = {
    readonly _id: string
    name: string
    email:string
    isActive:boolean
    creadcardDetails?: number
}

let myUser:User = {
    _id:"1234",
    name:"r",
    email:"r@r.com",
    isActive:false
}

type cardNumber = {
    cardnumber:string

}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

type cardDate = {
    cardDate:string
}

myUser.email = "h@gamil.com"
// myUser._id = "1234"




export {}