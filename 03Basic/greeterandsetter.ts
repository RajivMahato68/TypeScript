class User123{

    protected _courseCount = 1

    readonly city:string = "Jaipur"
    constructor(
        public email: string, 
        public name:string,
        // private userId: string
    ){
        this.email = email;
        this.name = name
    }

    private deleteToken(){
        console.log("Token delete")
    }

    get AppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum <=1) {
            throw  new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


class SubUser extends User123{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const hitesh = new User123("h@h.com","hitesh")

