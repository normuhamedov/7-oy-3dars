// // 1.
// for (let i: number = 0; i <= 10; i++) {
//   console.log(i)
// }
const students = [
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
export {};
//# sourceMappingURL=main.js.map