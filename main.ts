// // 1.
// for (let i: number = 0; i <= 10; i++) {
//   console.log(i)
// }

// // 2.
// for (let i: number = 1; i <= 50; i++) {
//   if (i % 2 === 0) console.log(i)
// }

// // 3.
// for (let i: number = 1; i <= 20; i++) {
//   if (i % 2 !== 0) console.log(i)
// }

// // 4.
// let sumEven: number = 0
// for (let i: number = 1; i <= 50; i++) {
//   if (i % 2 === 0) sumEven += i
// }
// console.log("Juftlar yig'indisi:", sumEven)

// // 5.
// const n5: number = 30
// for (let i: number = 1; i <= n5; i++) {
//   if (i % 3 === 0) console.log(i)
// }

// // 6. 
// let count5: number = 0
// for (let i: number = 1; i <= n5; i++) {
//   if (i % 5 === 0) count5++
// }
// console.log("5 ga bo'linadiganlar soni:", count5)

// // 7. 
// const arr7: number[] = [23, 12, 43, 12, 66, 23, 98, 1]
// arr7.forEach((val: number, idx: number) => console.log(idx))

// // 8. 
// arr7.forEach((val: number) => console.log(val))

// // 9.
// let sum9: number = 0
// arr7.forEach((val: number) => sum9 += val)
// console.log("Array yig'indisi:", sum9)

// // 10. 
// console.log("Elementlar soni:", arr7.length)

// // 11. 
// const names: string[] = ["Jasur", "Behruz", "Bahodir", "Jamshid", "Anvar"]
// const findName: string = "Jamshid"
// console.log(names.includes(findName) ? "Bor" : "Yo'q")

// // 12. 
// const arr12: number[] = [1,2,3,4,5,6,7,8]
// arr12.forEach((val: number) => {
//   if (val % 2 === 0) console.log(val)
// })

// // 13. 
// let sumEven13: number = 0
// let sumOdd13: number = 0
// arr12.forEach((val: number) => {
//   if (val % 2 === 0) sumEven13 += val
//   else sumOdd13 += val
// })
// console.log("Juftlar yig'indisi:", sumEven13)
// console.log("Toqlar yig'indisi:", sumOdd13)

// // 14. 
// console.log("6 indexi:", arr12.indexOf(6))

// // 15. 
// const arr15: number[] = [-1, 2, -3, 4, -5, 6, -7]
// const positiveArr15: number[] = arr15.map((val: number) => Math.abs(val))
// console.log("Musbat array:", positiveArr15)

// //


// // 1. 
// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
//   department: string;
// };

// const employees: Employee[] = [
//   { id: 1, name: "Ali", salary: 1200, department: "IT" },
//   { id: 2, name: "Vali", salary: 900, department: "HR" },
//   { id: 3, name: "Sami", salary: 1500, department: "IT" },
// ];
// const itEmployees = employees.filter(emp => emp.department === "IT");
// console.log("IT xodimlari:", itEmployees);
// const maxSalary = Math.max(...employees.map(emp => emp.salary));
// const richest = employees.find(emp => emp.salary === maxSalary);
// console.log("Eng katta maosh oluvchi:", richest);



// // 2.
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
// };

// const products: Product[] = [
//   { id: 1, name: "Laptop", price: 500, stock: 10 },
//   { id: 2, name: "Phone", price: 300, stock: 3 },
//   { id: 3, name: "Tablet", price: 200, stock: 0 },
// ];


// const lowStock = products.filter(p => p.stock <= 5);
// console.log("Stock ≤ 5:", lowStock);
// const totalValue = products.reduce((acc, p) => acc + p.price * p.stock, 0);
// console.log("Umumiy qiymat:", totalValue);



// // 3.
type Student = {
  id: number;
  name: string;
  grades: number[];
};

const students: Student[] = [
  { id: 1, name: "Sobir", grades: [90, 85, 88] },
  { id: 2, name: "Dilshod", grades: [70, 75, 80] },
  { id: 3, name: "Madina", grades: [95, 92, 90] },
];

students.forEach(s => {
  const avg = s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
  console.log(`${s.name} o'rtacha baho:`, avg.toFixed(2));
});

const bestStudent = students.reduce((best, curr) => {
  const avgBest = best.grades.reduce((a, b) => a + b, 0) / best.grades.length;
  const avgCurr = curr.grades.reduce((a, b) => a + b, 0) / curr.grades.length;
  return avgCurr > avgBest ? curr : best;
});
console.log("Eng yaxshi student:", bestStudent);
export {}
