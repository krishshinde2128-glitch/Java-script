fruits = ["banana", "orange", "apple",]
console.log(fruits)
fruits.push("grape") // Add at end
console.log(fruits) 
fruits.unshift("papaya")// Add at beginning 
console.log(fruits)
fruits.pop() // Remove from end
console.log(fruits) 
fruits.shift() // Remove from beginning 
console.log(fruits) 

fruits.forEach(function(item){
    console.log(item);
});


// SEARCHING IN ARRAY

console.log(fruits.indexOf("banana")) // 0  
console.log(fruits.includes("graps")) // false

