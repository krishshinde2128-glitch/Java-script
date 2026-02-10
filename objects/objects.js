let stuent = {
    name: "krish",
    age : 19,
    course : "Btect",
    isActive : true
};

let emeployee = {
    name: "rohan",
    age: 22,
    salary: 50000,
    getdetails: function() {
        return `${this.name} is ${this.age} years old and earns ${this.salary} per month.`;
    }
};

console.log(emeployee.getdetails());




let books = {
    title: "javascript",
    author: "krish",
    year: 2023,
};
console.log(books);
console.log(books.author);

stuent.age = 20;
console.log(stuent.age);

books.year = 2024;
console.log(books.year);


let person = {
    name : "alice",
    age : 30,
    city : "new york"
};

console.log(person.name)
