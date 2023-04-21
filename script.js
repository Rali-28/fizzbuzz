
// Prints a loop of 1 - 100
for (let i = 1; i <= 100; i++) {
    
    // Calculates the remainder of i value and 3
    let divisibleByThree = i % 3;
    // Calculates the remainder of i value and 5
    let divisibleByFive = i % 5;

    // Runs if the the value of i is divisible by 3 and 5 
    if (divisibleByThree == 0 && divisibleByFive == 0) {
        // Replaces value to Fizz Buzz
        console.log('Fizz Buzz')
    }
    // Runs if the value of i is only divisible by 3
    else if (divisibleByThree == 0) {
        // Replaces values to Fizz
        console.log('Fizz')
    }
    // Runs if the value of i is only divisible by 5
    else if (divisibleByFive == 0) {
        // Replaces value to Buzz
        console.log('Buzz')
    }
    else (
        // Simply prints out the value of i
        console.log(i)
    )
}