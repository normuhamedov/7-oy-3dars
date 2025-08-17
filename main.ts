// // // let arr:number[] = []

// // function calc(a:number, b:number, c:number):number[] {
// //     let calced:number = a+b+c
// //     return [calced]
// // }


// // console.log(calc(3,2,5));
 

// // //  2-task

// // let pr:string | null =  prompt("Ismingizni kiriting")

// // console.log([pr]);




// let imslar:{id:number, name:string, age:number}[] = [
//     {id:1 , name:"Jamshid" , age:21},
//     {id:2 , name:"Eshmat" , age:22},
//     {id:3 , name:"Toshmat" , age:23},
//     {id:4 , name:"Jo'shqin" , age:24},
// ]
// let findIsm:string | null = prompt("Ism kirit")
// function findUser(params:type) {
    
// }


// task-1

// 1.
const a1:number = 10
const b1:number = 20
const c1:number = 30
console.log("O'rta arifmetik:", (a1 + b1 + c1) / 3)

// 2.
const a2:number = 15
const b2:number = 25
console.log("Kattasi:", a2 > b2 ? a2 : b2)

// 3.
const a3:number = -7
console.log(a3 > 0 ? "Musbat" : a3 < 0 ? "Manfiy" : "0")

// 4.
const a4:number = 1234
console.log("Xonalar soni:", a4.toString().length)

// 5.
const a5:number = 13
console.log(a5 % 2 === 0 ? "Juft" : "Toq")

// 6.
const a6:number = 8
console.log(a6 % 2 === 0 ? a6 + 1 : a6 - 1)

// 7.
const a7:number = 987
console.log("Xonalar soni:", a7.toString().length)
console.log(a7 % 2 === 0 ? "Juft" : "Toq")

// 8.
const a8:number = 12
console.log(a8 % 2 === 0 ? "Qoldiq yo'q" : "Qoldiq:" + (a8 % 2))

// 9.
const a9:number = 5
const b9:number = 10
const c9:number = 15
console.log("O'rtacha:", (a9 + b9 + c9) / 3)

// 10.
const a10:number = 15
if (a10 % 3 === 0 && a10 % 5 === 0) {
  console.log("FizzBuzz")
} else if (a10 % 3 === 0) {
  console.log("Fizz")
} else if (a10 % 5 === 0) {
  console.log("Buzz")
} else {
  console.log(a10)
}

export {}




// // // // task-2

// 1. 
const num1: number = 47
const tens: number = Math.floor(num1 / 10)
const ones: number = num1 % 10
console.log("Kattasi:", tens > ones ? tens : ones)

// 2.
const num2: number = 12
console.log(num2 % 2 === 0 ? num2 + 1 : num2 - 1)

// 3.
const num3: number = 14
console.log(num3 % 3 === 0 ? "Karrali" : "Karrali emas")

// 4. 
const c4: number = 2
const b4: number = 7

const min4: number = Math.min(c4, b4)
const max4: number = Math.max(c4, b4)
const two: number = min4 * 10 + max4

console.log("Natija:", two)


// 5.
const num5: number = 12345
console.log("Xonalar soni:", num5.toString().length)

// 6.
const num6: number = -20
console.log(num6 > 0 ? "Musbat" : num6 < 0 ? "Manfiy" : "0")

// 7. 
const num7: number = -11
console.log(num7 % 2 === 0 ? "Juft" : "Toq")
console.log(num7 > 0 ? "Musbat" : num7 < 0 ? "Manfiy" : "0")

// 8. 
const birthYear: number = 2000
const currentYear: number = 2025
const age: number = currentYear - birthYear
console.log("Yosh:", age)

// 9. 
const x9: number = 10
const y9: number = 12
console.log(x9 % 3 === 0 ? "x9 Ha" : y9 % 3 === 0 ? "y9 Ha" : "Yo'q")


// 10
const d1: number = 8
const d2: number = 7
const d3: number = 1

const arr:number[] = [d1, d2, d3]
arr.sort((a, b) => a - b)
const threeDigit:number = arr[0]!*100 + arr[1]!*10 + arr[2]!        // ??? 

console.log("Natija:", threeDigit)


// 11. 
const num11: number = 17
const remainder: number = num11 % 2
console.log(remainder === 0 ? "Qoldiq juft" : "Qoldiq toq")

export {}
