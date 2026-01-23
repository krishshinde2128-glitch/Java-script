let numbers = [1,2,3]

// map() - 
let square = numbers.map(num => num * num)
console.log(square)

// filter() - selects element
let even = numbers.filter(num => num % 2 === 0 )
console.log(even)

// reduce() - reduces to single value 
let sum = numbers.reduce((total , num ) => total + num, 0);
console.log(sum)