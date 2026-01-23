let subject = ["html","ccs","JS","python","Java"];
let marks = [85,90,82,75,69];
let student = ["krish",96,"mumbai"]

console.log("student:" ,subject)
console.log("marks: ", marks)
console.log("student details: ", student)

// for(let i=0;i<marks.length;i++){
//     marks[i] += marks[i];
// } console.log("marks:  $(marks)");

let total=0
for(let i=0;i<marks.length;i++){
    total+=marks[i];
}
console.log("total marks: ", total);