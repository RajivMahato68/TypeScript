abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter:string
    ){}

    abstract getSepia():void
    getRellTime():number{
        //some complex calculation
        return 8
    }
}



class Instgram extends TakePhoto{
    constructor(public cameraMode:string,
        public filter:string,
        public brust:number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia");
        
    }
}
const hc = new Instgram("test","test2",3)
hc.getRellTime()