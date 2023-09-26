// Sample Input
let numbers = [1,2,3,4,5,7]

// Skeleton Code
function func(numbers){
    const evenNumbers = numbers.slice().filter(num => num % 2 === 0);
    const oddNumbers = numbers.slice().filter(num => num % 2 !== 0);
    console.log("odd : " + oddNumbers.toString())
    console.log("even : " +evenNumbers.toString())
}

function filter(numbers, func) {
    // split s into two slices: even and odd
    // code here
    func(numbers)
}

filter(numbers, func);



// Sample Output
// Odd: 1,3,5,7
// Even: 2,4