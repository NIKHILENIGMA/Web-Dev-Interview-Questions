/**
 *note Question: Write a function to check if a given number is prime or not.
 * 
 * Description:
 *note A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
 * Write a function that takes an integer as input and returns true if the number is prime, otherwise false.
 * 
 * Example:
 * 
 * Input: 5
 * Output: true
 * 
 * Input: 4
 * Output: false
 * 
 * Input: 13
 * Output: true
 * 
 * Input: 1
 * Output: false
 * 
 * Constraints:
 * - The input number will be a positive integer.
 * - The function should handle large numbers efficiently.
 */


class Solution {
    isPrime(n) {
        // brute force solution

        //  Check wheather given n is not NaN, infinite, less than 2
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;

        // if number is even then false 
        if(n % 2 === 0) return false;
        
        // Square of the number n
        const m = Math.sqrt(n);

        // Iterate to check if it n is divisible of i
        for(let i = 2; i <= m; i++){
            if(n % i === 0) return false
        }

        return true


    }

    isPrime2(n){
        // Better soltion
        //  Check wheather given n is not NaN, infinite, less than 2
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;

        // if number is even then false 
        if(n % 2 === 0) return (n == 2);
        
        // Square of the number n
        const m = Math.sqrt(n);

        // Iterate to check if it n is divisible of odd number
        for(let i = 3; i <= m; i+= 2){
            if(n % i == 0) return false
        }

        return true
    }

    isPrime3(n){
        // optimized soltion
        //  Check wheather given n is not NaN, infinite, less than 2
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;

        // if number is even then false 
        if(n % 2 === 0) return (n == 2);
        if(n % 3 === 0) return (n == 3);
        
        // Square of the number n
        const m = Math.sqrt(n);
        console.log(m);
        
        // Iterate to check if it n is divisible of odd number
        for(let i = 5; i <= m; i+= 6){
            if(n % i == 0) return false
            if(n % (i + 2) == 0) return false
        }
        
        return true
    }
}

const solution = new Solution()
console.log(solution.isPrime(17));
console.log(solution.isPrime2(17));
console.log(solution.isPrime3(17));

// console.log(Math.sqrt(59));
