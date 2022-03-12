export{}

console.log('Hello typescript');
const a: number = 10;
const b: number = 30;
const c: number = 30;
// console.log(a+b);
//Khai b
type  User = {
    id: number;
    name: string
}
interface Admin{
    id: number;
    name: string
}
interface Admin{
    role: 1;
    name: string
}



const myName : string = "Nguyễn Văn Trăm";
const nyAge : number = 20; 
const status : boolean = true;
const myObj: {id:number, name: string} = {id: 1, name: "tram"};


const numberArr:number[] =[1,2,3,4,5];
const stringArr: string[] = ["a", "b", "c", "d"];
const objectArr: {id:number, name: string}[] = [{id:1, name: "tram1"}];

function sum(numA:number, numB:number):number{
    return numA + numB;
}
// console.log(sum(a,b));
sum(a,b);

/**
 * tsc --init
 * target: "es2018"
 * "outDir": "./dist", 
 * baseUrl: "./url"
 * sourceMap: true
 */
