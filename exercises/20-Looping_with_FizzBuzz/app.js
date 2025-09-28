function fizzBuzz() {  
	// Your code here
	for (let i = 1; i <= 100; i++) {
        let output = '';

        if (i % 3 === 0) {
            output += "Fizz";
        }
        
        if (i % 5 === 0) {
            output += "Buzz";
        }
        
        // If output is not empty (i.e., it's "Fizz", "Buzz", or "FizzBuzz"), print it.
        // Otherwise, print the number 'i'.
        console.log(output || i);
    }
}

fizzBuzz();